<?php
//inside the file class.Demo.php with code below
  class Demo{
    public $name;
    function sayHello(){ print 'Hello $this->name!';}
          }

?>
<?php 
//Create the file testdemo.php with code below
require_once(‘class.Demo.php’);
$objDemo = new Demo();
$objDemo-> name = ‘Steve’;

$objAnotherDemo = new Demo();
$objAnotherDemo-> name = ‘Ed’;

$objDemo->sayHello();
$objAnotherDemo->sayHello();

/*Outputs
Hello Steve!
Hello Ed!
*/
//public is used to let the class know that you want to have access to the following variable
//from outside the class
//$obj -> property
?>