<?php

$mysql = 'mysql:host=localhost;dbname=phpexport';
$sqlite = 'sqlite:/Applications/XAMPP/htdocs/querydatabase/phpexport.db';

try {
	$db = new PDO($mysql, 'root', '');
	$db = new PDO($sqlite);
	$sql = 'SELECT car_id, make, yearmade, mileage, transmission,
    price, description FROM cars
    INNER JOIN makes USING (make_id)
    WHERE yearmade > 2008
    ORDER BY price';
	$result = $db->query($sql);
	$errorInfo = $db->errorInfo();
	if (isset($errorInfo[2])){
		$error = $errorInfo[2];
	}
} catch (PDOException $e) {
	$error = $e->getMessage();
}


function getRow($result) {
	return $result->fetch();
}
/**
if (isset($error)) {
		echo $error; 
} else {
	echo 'ok';
}
 * */
 */