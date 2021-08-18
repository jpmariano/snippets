<?php

$mysql = 'mysql:host=localhost;dbname=phpexport';
$sqlite = 'sqlite:/Applications/XAMPP/htdocs/querydatabase/phpexport.db';

try {
	$db = new PDO($mysql, 'root', '');
	$db = new PDO($sqlite);
	$sql = 'SELECT * FROM arrangements';
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