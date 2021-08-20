<?php 
// __construct() , Its is the function that is automatically called once the object is created.
class Demo {
  private $name;
  public function __construct($name) {
      $this-> name = $name;
    }
  function sayHello() {
      print “Hello $this-> name!”;
    }
  }
?>