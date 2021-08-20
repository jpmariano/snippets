<?php

abstract class HumanClass
{  
	private $gender;
	abstract public function getGender();   
}
//Composition: Association and Agreegation
//Agreegation 1: involves passing an instantiated object into a class so that the class can “use” our object; one to many relationship; open diamond;
class OfficeEquipment {
    // property declaration
    private $equipment = NULL;

    // method declaration
    public function __construct() {
    	$this->equipment = 'tools';
        return $tools = $this->equipment;
    }
}

//Agreegation 2
$equipment = new OfficeEquipment;


//Association 1: instantiating whole objects and using them as properties, or passed-in parameters, in another class; calling other classes method - something communicating to another class; closed diamond;
class Job {
    // property declaration
    private $job_title = NULL;

    // method declaration
    public function __construct() {
    	$this->job_title = 'Web Developer';
        return $this->job_title;
		
    }
}

//Inheritance Man inherit from HumanClass
abstract class Man extends HumanClass {
	
	
	private function setGender(){
	    $this->gender = 'male';
	}
	
	public function getGender(){
		return $this->setGender();
	}
	
	function __construct() {
       $this->getGender();
    }
	
	private $employmentstatus;
	abstract public function getEmploymentstatus(); 
	  
}

trait Fullwallet {
	
	public function hasmoney(){
	    	return $money = 'has money';
	}
}

interface iJobname {
    public function setJobname($name);
}

class PersonEmployed extends Man implements iJobname {
	
    private $vars = array();
	//Association 2
    private $job;
	
	//Agreegation 5
	public function getTools($tools) {
	   $this->vars['equipment'] = $tools->__construct(); 
    }
	
	private function setEmploymentstatus(){
	    $this->employmentstatus = 'employed';
	}
	//concreate implementation of getEmploymentstatus from MAN
	public function getEmploymentstatus(){
		return $this->setEmploymentstatus();
	}
	
	//trait is for generic code re-use
	use Fullwallet;
	
	function __construct(&$tools) {
	   //Agreegation 4
	   $this->getTools($tools);
	   //bring in getGender from MAN
	   parent::getGender();
	   //bring in from trait
	   $checkcash = $this->hasmoney();
	   print_r($this->getEmploymentstatus());
	   
	   //Association 3: Since the object is instantiated inside, when the PersonEmployed object is destroyed, so as the job object;
	   $this->job= new Job();
	   $this->job->__construct();
	   
	   function __destruct() {
         /* Clean up code */
   		}
	   
	   $this->vars['sex'] =  $this->gender;
	   $this->vars['employment'] = $this->employmentstatus;
	   $this->vars['wallet'] = $checkcash;
	   $this->vars['specific_job_title'] = $this->job->__construct();
	   
    }
	
	//interface implementation from iJobname
	public function setJobname($name) {
	   $this->vars['job_title'] = $name;
    }
	
	
	//move variables from private vars to public properties
	var $properties = NULL;
	
	private function setProperties(){
	    $this->properties = $this->vars;
	}
	
	public function getProperties(){
		return $this->setProperties();
	}
	
	
	
	
}

//Agreegation 3 PersonEmployed($equipment)
$john = new PersonEmployed($equipment);
$john->setJobname('programmer');
$john->getProperties();
//echo $john->properties['sex'];


foreach ($john->properties as $key => $properties) {
    echo $key . " : " . $properties . '</br>';
}

/*
while (list($var, $val) = each($john->properties)) {
        print "$var  $val\n" . '</br>';
 }
*/
?>
<pre>
<?php print_r(get_defined_vars($john));

 ?>
</pre>

<?php
