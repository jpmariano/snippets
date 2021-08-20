<?php
// We must define the location of the service in the client
// because we don't have a WSDL file
$options = array("location" => "http://localhost/simpleapi/soap/soap_service.php",
				"uri" => "http://localhost");
				
try{

// Provides a client to read from the service
// It either receives a WSDL file, or null and the options
$client = new SoapClient(null, $options);

// Call the function in the Students class
$students = $client->getStudentNames();

echo $students;

}

catch(SoapFault $ex){

var_dump($ex);

}

?>