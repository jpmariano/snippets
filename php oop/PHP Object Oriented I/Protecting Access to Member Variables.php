<?php
// Filename: class.Demo.php
class Demo {
  private $_name;
  public function sayHello() {
      print 'Hello ' . $this- > getName() . '!' 
    }
  public function getName() {
      return $this- > name;
    }
  public function setName($name) {
      if(!is_string($name) || strlen($name) == 0) {
      throw new Exception(“Invalid name value!”);
    }
      $this- > name = $name;
    }
  }
  /*$this so that the object can get information about itself.
  $this variable allows each object to access its own properties and methods without
  having to know the name of the variable that represents it in the exterior application
  
  underscore is a recommended naming convention to indicate private member variables and functions
  Accessor Method: get[ property name ] and set[ property name ]
  
  Private internal member variables are not accessible from outside the class. Because you can ’ t access these variables directly,
  you ’ re forced to use the getName() and setName() accessor methods to obtain this information,
  ensuring that your class can examine the value before allowing it to be set.
  
  By creating accessor methods for all your properties, you make it much easier to add data validation or
  new business logic, or make other changes to your objects later

  Public members are accessible to any and all code. Private members are accessible only to the class itself.
  These are typically items used for internal housekeeping, and might include such things as a database
  connection handle or configuration information. Protected members are available to the class itself and to
  classes that inherit from it.
  
  */
  ?>
  
  <?php
  //filename: testdemo.php
    require_once(‘class.Demo.php’);
    $objDemo = new Demo();
    $objDemo- > setName(‘Steve’);
    $objDemo- > sayHello();
    $objDemo- > setName(37); //would trigger an error
    ?>
  
  
  