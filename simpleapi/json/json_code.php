<?php

// Tell whomever is receiving this data the content type
// Needs to be set on the first line
// header('Content-Type: application/json');

// Insert to the StudentDB class
require_once('StudentDB.php');

// json_decode decodes a JSON string into a format we can use
$json_data = json_decode('{"first_name" : "Dale"}');

// Displays the structure of data
// object(stdClass)#1 (1) { ["first_name"]=> string(4) "Dale" }
// 1 object that contains a key of first_name and a 4 character string Dale
var_dump($json_data);

// Create an object and then encode that data using JSON

class Address {

	public $street = "";
	public $city = "";
	public $state = "";
	
	function __construct($street, $city, $state){
	
		$this->street = $street;
		$this->city = $city;
		$this->state = $state;
	
	}

}

class Student {

	public $first_name = "";
	public $last_name = "";
	public $age = 0;
	public $enrolled = false;
	public $married = null;
	public $address;
	public $phone;
	
	function __construct($first_name, $last_name, $age, $enrolled,
		$married, $street, $city, $state, $ph_home, $ph_mobile){
	
		$this->first_name = $first_name;
		$this->last_name = $last_name;
		$this->age = $age;
		$this->enrolled = $enrolled;
		$this->married = $married;
		$this->address = new Address($street, $city, $state);
		$this->phone = array("home" => $ph_home,
							"mobile" => $ph_mobile);
	
	}

}

$dale_cooper = new Student("Dale", "Cooper", 35, true, null,
		"123 Main St", "Seattle", "WA", "4125551212", "4125552121");

echo "<br /><br />";

// Encodes the object using JSON and prints it
$dale_data = json_encode($dale_cooper);
echo $dale_data . "<br /><br />";

// Get a connection to the database
require_once('mysqli_connect.php');

// Check the connection
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

// Query retrieves the student data
$query = "SELECT * FROM students WHERE student_id IN (1,2)";

// Will hold all students retreived
$student_array = array();

if($result = $dbc->query($query)){

	while ($obj = $result->fetch_object()){
	
		printf("%s %s %s %s %s %s %s %s %s %s %s %s %s <br />",
		$obj->first_name, $obj->last_name, $obj->email,
		$obj->street, $obj->city, $obj->state, $obj->zip,
		$obj->phone, $obj->birth_date, $obj->sex, 
		$obj->date_entered, $obj->lunch_cost, $obj->student_id);
		
		
		
		$temp_student = new StudentDB($obj->first_name, 
		$obj->last_name, $obj->email, $obj->street,
		$obj->city, $obj->state, $obj->zip, $obj->phone, 
		$obj->birth_date, $obj->sex, $obj->date_entered, 
		$obj->lunch_cost, $obj->student_id);
		
		$student_array[] = $temp_student;
	
	}
	echo "<br /><br />";
	var_dump($student_array);
	
	echo "<br /><br />";
	
	// Surround the student data
	echo '{"students":[';
	
	// Take data array created and convert into JSON
	$dale_data = json_encode($student_array[0]);
	echo $dale_data;
	
	// Seperate the results
	echo ',<br />';
	
	$dale_data = json_encode($student_array[1]);
	echo $dale_data . "<br />";
	
	// Close the JSON data
	echo ']}';
	
	
	
	
	echo "<br /><br />";
	$printall_data = json_encode($student_array);
	echo $printall_data;
	echo "<br /><br />";

	// Close the database connection
	$result->close();
	$dbc->close();

}

?>