<?php
$db = new mysqli('localhost', 'root', '', 'phpexport');
if ($db->connect_error) {
	$error = $db->connect_error;
} else {
	$sql = 'SELECT * FROM arrangements';
	$result = $db->query($sql);
	if ($db->error) {
		$error = $db->error;
	}
}

function getRow($result) {
	return $result->fetch_assoc();
}
/* Test Error
if (isset($error)) {
		echo $error; 
} else {
	echo 'ok';
}
 
 */
 
 //phpinfo();

