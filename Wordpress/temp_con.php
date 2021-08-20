<?php
	require ($_SERVER["DOCUMENT_ROOT" . "db_config.php");
	$connection = @mysql_connect ($db_host, $db_user, $db_password) or die ("Error Connection");
	echo "connection made";
	
?>

<!--
@ - to make errors invisible
to keep mysql secure while using php
go to conf
edit httpd.conf
add deny inside httpd.conf
<Directory "K:/webroot/config">

-->

<!--
Other way of using the config.php
include('db_config.php');
$connection = mysql_connect($db_host, $db_username, $db_password);
if (!$connection){
die ("Could not connect to the database: <br />". mysql_error());
}
-->

<!--
The mysql_connect function takes the database host, username, and password as parameters. If the connection is successful, a link to a database is returned. FALSE is returned if a connection can't be made. Check the return value from the function to make sure there's a connection. If there's a problem, such as an incorrect password, print out a polite warning and the reason for the error using mysql_error.

-->

$db_select = mysql_select_db($db_database, $connection );
if (!$db_select){
die ("Could not select the database: <br />". mysql_error());
}
<!--
Selecting Database
Now that you're connected, the next step is to select which database to use with the mysql_select_db command. It takes two parameters: the database name and, optionally, the database connection. If you don't specify the database connection, the default is the connection from the last mysql_connect.
-->
<?php
$select = ' SELECT ';
$column = ' * ';
$from = ' FROM ';
$tables = ' `books` ';
$where = '';
$query = $select.$column.$from.$tables.$where;
?>
<!-- Which is a more flexible version of this:-->

<?php 
$query = "SELECT * FROM books";
?>

<!-- Building the SQL SELECT Query-->

<!-- 9.2.5. Executing the Query
To have the database execute the query, use the mysql_query function. It takes two parametersthe query and optionally the database linkand returns the result. Save a link to the results in a variable called, you guessed it, $result! This is also a good place to check the return code from mysql_query to make sure that there were no errors in the query string or the database connection by verifying that $result is not FALSE. -->

<?php 
$result = mysql_query( $query );
if (!$result)
{
die ("Could not query the database: <br />". mysql_error());
}
?>


<!--
When the database executes the query, all of the results form a result set. These correspond to the rows that you saw upon doing a query using the mysql command-line client. To display them, you process each row, one at a time.
-->
<!--
Executing the Query
To have the database execute the query, use the mysql_query function. It takes two parametersthe query and optionally the database linkand returns the result. Save a link to the results in a variable called, you guessed it, $result! This is also a good place to check the return code from mysql_query to make sure that there were no errors in the query string or the database connection by verifying that $result is not FALSE.
When the database executes the query, all of the results form a result set. These correspond to the rows that you saw upon doing a query using the mysql command-line client. To display them, you process each row, one at a time -->

<?php
$result = mysql_query( $query );
if (!$result)
{
die ("Could not query the database: <br />". mysql_error());
}
?>
<!--
Fetching and Displaying
Use mysql_fetch_row to get the rows from the result set. It takes the result you stored in $result from the query as a parameter. It returns one row at a time from the query until there are no more rows, and then it returns FALSE. Therefore, you do a loop on the result of mysql_fetch_row and define some code to display each row:

-->
while ($result_row = mysql_fetch_row($result)){
       echo $result_row[2] . '<br />';
}


