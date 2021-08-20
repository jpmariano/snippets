<?php
header('Content-Type:text/html; charset=UTF-8');

// Get a connection to the database
require_once('../mysqli_connect_language.php');

// Set character set in PHP to get proper characters
$dbc->set_charset("utf8");

// ----- FUNCTION TRANSLATE

function translate($translate_to, $matching_ids, $dbc){
    
    	// Represents the id name in the table so for Russian it
    	// would be russian_id
    	$translate_id = $translate_to . '_id';
    
    	$translate_query = 'SELECT word FROM ' . $translate_to . ' WHERE ' . $translate_id . ' IN (';
        
        	foreach($matching_ids as $id){
        
        		$translate_query = $translate_query . $id . ',';
        
        	}
        
        	// Remove the last comma
        	$translate_query = rtrim($translate_query, ",");

			$translate_query = $translate_query . ') ORDER BY CASE ' . $translate_id . ' ';
		
			// Counts the number of ids in the array
			$index_increment = 1;
		
			foreach($matching_ids as $id){
        
        		$translate_query = $translate_query . 'WHEN ' . $id . ' THEN ' .
        		$index_increment . ' ';
        	
        		$index_increment++;
        
        	}
        
        $translate_query = $translate_query . 'END;';
    
    	// Issue the query to the database
    	$translate_response = mysqli_query($dbc, $translate_query);
    
    	// Print language with uppercase letter
    	echo ucfirst($translate_to) . ' : ';
    
    	if($translate_response){

        		while($row = mysqli_fetch_array($translate_response)){
        
        				$translated_text = $translated_text . ' ' . $row['word'];

        		}
        		
        		echo $translated_text;
        
    	}

} // Close function translate

// ----- END FUNCTION TRANSLATE

if(isset($_POST['submit'])){

	if(empty($_POST['english_words'])){

        echo 'Enter some words in english<br />';

    } else {

        // Trim white space from the name and store the name
        $english_words = trim($_POST['english_words']);
        
        $english_array = array();
        
        // Break the words into an array
        $english_array = explode(" ", $english_words);
        
        // Will hold the indexes for each matching word
        $english_id_nums = array();
        
        // Beginning of the query
        $query = "SELECT english_id, word FROM english WHERE word IN ("; 
        
        // Used to make sure the words show in order
        $order_in_case = "order by CASE word ";
        
        /* The query we have to build
        SELECT english_id, word FROM english WHERE word IN ("Here", "are", "some", "dogs") 
		ORDER BY CASE word
		WHEN "here" THEN 1
		WHEN "are" THEN 2
		WHEN "some" THEN 3
		WHEN "dogs" THEN 4
		END;
		*/

		// Increments for the ORDER BY CASE
		$index_increment = 1;
        
        foreach($english_array as $word){
        
        	$query = $query . '"' . $word . '",';
        	
        	$order_in_case = $order_in_case . 'WHEN "' .
        	$word . '" THEN ' . $index_increment . ' ';
        	
        	$index_increment++;
        
        } 
        
        // Remove the last comma
        $query = rtrim($query, ",");
        
        $query = $query . ') ' . $order_in_case . ' END;';
        
        // Issue the query to the database
        $response = @mysqli_query($dbc, $query);
        
        // Array that contains the matching ids in order
        $matching_ids = array();
        
        echo 'English : ';
        
        if($response){

        	while($row = mysqli_fetch_array($response)){
        
        		echo $row['word'] . ' ';
        		
        		$matching_ids[] = $row['english_id'];
        		
        		// Holds the array after the select
        		$array_after_query[] = $row['word'];
        
        	}
        	
        	echo '<br />';
        
        } // Close if($response)
    
    } // Close else for if(empty($_POST['english_words'])

translate("arabic", $matching_ids, $dbc);
echo '<br />';
translate("chinese", $matching_ids, $dbc);
echo '<br />';
translate("danish", $matching_ids, $dbc);
echo '<br />';
translate("dutch", $matching_ids, $dbc);
echo '<br />';
translate("french", $matching_ids, $dbc);
echo '<br />';
translate("german", $matching_ids, $dbc);
echo '<br />';
translate("italian", $matching_ids, $dbc);
echo '<br />';
translate("portuguese", $matching_ids, $dbc);
echo '<br />';
translate("russian", $matching_ids, $dbc);
echo '<br />';
translate("spanish", $matching_ids, $dbc);

} // Close if(isset($_POST['submit']))


?>

<form action="http://localhost/get_translation.php" method="post">

<p>English:
<input type="text" name="english_words" size="100" value="" />
</p>

<p>
<input type="submit" name="submit" value="submit" />
</p>

</form>

<?php
// Close connection to the database
mysqli_close($dbc);

?>

<!--

/*
Change my.cnf file for MySQL to the following so MySQL is configured to use 
unicode by default and then restart the MySQL server
You can find the location of my.cnf by typing mysql --help in Windows
[client]
socket = /var/mysql/mysql.sock
default-character-set=utf8

[mysql]
default-character-set=utf8

[mysqld]
socket = /var/mysql/mysql.sock
collation-server = utf8_unicode_ci
init-connect='SET NAMES utf8'
character-set-server = utf8
 
GRANT SELECT ON language.*
TO 'studentweb'@'localhost'
IDENTIFIED BY 'turtledove';
 
Login to MySQL (Load Data Locally)
mysql5 --local-infile=1 -u mysqladmin -p

Create Database
CREATE DATABASE language;

Switch to use database
USE language;

ALTER DATABASE `language` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

Make sure every file is saved as UTF-8 otherwise the characters
are messed up. NotePad++ and Text Wrangler allow you to save this way

Create the table
CREATE TABLE english(
word VARCHAR(60) NOT NULL,
english_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
) CHARSET utf8;

LOAD DATA LOCAL INFILE 'englishwords.txt'
INTO TABLE `english`
LINES TERMINATED by '\n'
SET english_id = NULL;

Load data into table

CREATE TABLE arabic(
word VARCHAR(60) NOT NULL,
arabic_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
) CHARSET utf8;

LOAD DATA LOCAL INFILE 'arabicwords.txt'
INTO TABLE `arabic`
LINES TERMINATED by '\n'
SET arabic_id = NULL;

CREATE TABLE chinese(
word VARCHAR(60) NOT NULL,
chinese_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
) CHARSET utf8;

LOAD DATA LOCAL INFILE 'chinesewords.txt'
INTO TABLE `chinese`
LINES TERMINATED by '\n'
SET chinese_id = NULL;

CREATE TABLE danish(
word VARCHAR(60) CHARACTER SET utf8 collate utf8_general_ci,
danish_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
) CHARSET utf8
COLLATE utf8_general_ci;

LOAD DATA LOCAL INFILE 'danishwords.txt'
INTO TABLE `danish`
LINES TERMINATED by '\n'
SET danish_id = NULL;

CREATE TABLE dutch(
word VARCHAR(60) CHARACTER SET utf8 collate utf8_general_ci,
dutch_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
) CHARSET utf8
COLLATE utf8_general_ci;

LOAD DATA LOCAL INFILE 'dutchwords.txt'
INTO TABLE `dutch`
LINES TERMINATED by '\n'
SET dutch_id = NULL;

CREATE TABLE french(
word VARCHAR(60) CHARACTER SET utf8 collate utf8_general_ci,
french_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
) CHARSET utf8
COLLATE utf8_general_ci;

LOAD DATA LOCAL INFILE 'frenchwords.txt'
INTO TABLE `french`
LINES TERMINATED by '\n'
SET french_id = NULL;

CREATE TABLE german(
word VARCHAR(60) CHARACTER SET utf8 collate utf8_general_ci,
german_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
) CHARSET utf8
COLLATE utf8_general_ci;

LOAD DATA LOCAL INFILE 'germanwords.txt'
INTO TABLE `german`
LINES TERMINATED by '\n'
SET german_id = NULL;

CREATE TABLE italian(
word VARCHAR(60) CHARACTER SET utf8 collate utf8_general_ci,
italian_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
) CHARSET utf8
COLLATE utf8_general_ci;

LOAD DATA LOCAL INFILE 'italianwords.txt'
INTO TABLE `italian`
LINES TERMINATED by '\n'
SET italian_id = NULL;

CREATE TABLE portuguese(
word VARCHAR(60) CHARACTER SET utf8 collate utf8_general_ci,
portuguese_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
) CHARSET utf8
COLLATE utf8_general_ci;

LOAD DATA LOCAL INFILE 'portuguesewords.txt'
INTO TABLE `portuguese`
LINES TERMINATED by '\n'
SET portuguese_id = NULL;

CREATE TABLE russian(
word VARCHAR(60) CHARACTER SET utf8 collate utf8_general_ci,
russian_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
) CHARSET utf8
COLLATE utf8_general_ci;

LOAD DATA LOCAL INFILE 'russianwords.txt'
INTO TABLE `russian`
LINES TERMINATED by '\n'
SET russian_id = NULL;

CREATE TABLE spanish(
word VARCHAR(60) CHARACTER SET utf8 collate utf8_general_ci,
spanish_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
) CHARSET utf8
COLLATE utf8_general_ci;

LOAD DATA LOCAL INFILE 'spanishwords.txt'
INTO TABLE `spanish`
LINES TERMINATED by '\n'
SET spanish_id = NULL;

Returns the word and index for the list of words
select english_id, word from english where word in ("I", "Like", "Dogs");

select word, spanish_id
from spanish
where spanish_id in (17, 76, 1679);

select word, russian_id
from russian
where russian_id in (17, 76, 1679);

// ORDER BY CASE solves the problem of keeping the words in order
select english_id, word from english where word in ("Here", "are", "are", "dogs")
order by CASE word
WHEN "here" then 1
WHEN "are" then 2
WHEN "are" then 3
WHEN "dogs" then 4
END;

// ORDER BY CASE solves the problem of keeping the words in order
select word from russian where russian_id in (131,26,69)
order by CASE russian_id
WHEN 131 then 1
WHEN 26 then 2
WHEN 69 then 3
END;

SELECT english_id, word
FROM english
JOIN (
    SELECT 'Here' AS word, 1 AS word_order
    UNION ALL SELECT 'are', 2
    UNION ALL SELECT 'are', 3
    UNION ALL SELECT 'dogs', 4) WordsToSearch ON english.word = WordsToSearch.word
ORDER BY WordsToSearch.word_order;


-->
?>