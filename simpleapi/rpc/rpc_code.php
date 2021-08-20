<html>
<?php

// RPC (Remote Procedure Call) is used to call a function remotely
// You include the function name to execute and maybe attributes

// Insert to the Students class
require_once('Students.php');

$student_data = new Students();

if(isset($_POST['submit'])){

	switch($_POST['request']){
	
	case "Get First Names" :
		$student_info = $student_data->getStudentFirstName();
		break;
		
	case "Get Last Names" :
		$student_info = $student_data->getStudentLastName();
		break;
		
	default:
		http_response_code(400);
	
	}
	echo json_encode($student_info);

}

?>

<form action="rpc_code.php" method="post">

Request: 
<select name="request">

<option>Get First Names</option>
<option>Get Last Names</option>

</select>

<input type="submit" name="submit">

</form>

</html>