<?php
/* 
Programming Jargon:

Programming Jargon:
Parent Class - also called super class or base class
Child Class - also called sub class
Abstract Class: A class that contains one or more abstract methods (Interface). You use the syntax, 'extends' to implement the abstract class. In UML, the abstract interface is displayed as a broken arrow.
method - is a function that contains structured code (sequence, conditions, iterations)
Interface Method - is a public method. Normally has a return. Accessor and Constructor are both interface. 
    2 Types of Interface
        - Abstract Interface - more generic (Take me to Airport). More Resuable. 
        - Concrete Interface - very specific (Take taxi, turn right, turn left ...)
    - Design Thought Process - designed the interface by having users perspective; give only what they need; When first creating a class, hide everything; check requirements to identify the behavior of the interface. 
    - Users - Objects that uses and sends data to interface; Users need to know how to use the interface (like what parameters to pass).
    - When possible, avoid changes to interface after its built.
    - Stubs - a temporary implementation of interface (ie.. simulate database connection)
    - Interface has signatures
    - It can be use by classes that are not related
    - Models Behavior

Implementation Method - is a private method. It can be change without the knowledge of the user of the interface. 
Modules - Interface and Implementation can be seen organized in modular fashion
Constructor - is a method that is the same as classname or use the word contruct method. Primary purpose is for initialization(safe state) of attributes. No return. Called during intantiation. 
    Best practice to have one constructor even if not in used. If you plan to add a contructor, then replace the default (check for bugs) or just simply add another contructor. 


Is a Relationship - Circle is a shape, Square is a shape
    Inheritance - Abstaction (copy a parent to create it's own)
    - Multiple Inheritance - Class that inherets from multiple class or abstract class (except Java, .net, and Objective C)
    - Polymorphism - Normally when a public abstract method  of a parent class is overriden.
        - When an Abstract class is extended, it is inheretance. And when the Interface methods is overriden that's when you can call polymorphism. 
        - For Example, Square is a child of Shape and Circle is a child of shape. When you call getArea() - each class returns different calculations.
        - Another example: A drawShape has an interface of drawMe(). And it takes, any shapes.
    - When a Child Class inherits, You use the syntax, 'implements' to inherit from parents.
    - If the child implementation differs from the parent class, it might not be truly a child class.

Has a Relationship 
    composition - a class/object which is composed of other class/object. Embed a class inside another class.
        - 2 Types
            - Agreegation - objects have their own lifecycle, but there is ownership and child objects can not belong to another parent object.
                - Example: Let's take an example of Department and teacher. A single teacher can not belong to multiple departments, but if we delete the department, the teacher object will not be destroyed. We can think about it as a “has-a” relationship.
                - Example: Car has a wheel. In UML, the car has a diamond and the wheel has the line.
            - Association -  is a relationship where all objects have their own lifecycle and there is no owner.
                - Example: Multiple students can associate with single teacher and single student can associate with multiple teachers, but there is no ownership between the objects and both have their own lifecycle. Both can be created and deleted independently.
            - Composition - AKA: Death Relationship Child object does not have its lifecycle and if parent object is deleted, all child objects will also be deleted.
                - Example: House and Rooms. House can contain multiple rooms - there is no independent life of room and any room can not belong to two different houses. If we delete the house - room will automatically be deleted.

Overloading a Method - a method that is called twice within an object/class with different parameter each time. Good if you don't know what possible parameter input the user of the interface/method. 
    For example, the user is login/out they can still order from shopping cart. In each case, if this is a constructor, it can be initialize differently. 

Signature - is a method name + Parameter

Error Handling - Throw an exception, do not ignore. Display and error and do a cleanup by asking user for error feedback. Try and cath method.
Destructors = available on some language like C#. Purpose to prevent memory leak and code cleanup.

How to Think in OOP:
 - Think in Abstract
 - Minimal Interace as possible

 OOP Paradox - Inheritance weekens encapsulation
    - Between classes - there's strong encapsulation
    - Between Parent and Child Clasess - there's week Encapsulation. Changes in parent can have a ripple effect to child. 


When Designing a Class: 
    - Keep Extensibility in mind. 
    - Provide a way to copy and compare objects. 
    - Keep the scope as small as possible. Think carefully if class/object attributes needs to belong to local attribute. 
    - Class should be responsible for itself meaning print method of a circle shape is different than printing a square shape. 
    - A change in one classs should not interfere other classes. 
    - Write and test code at small increment. 
    - Use stubs for testing.
    - When altering Interface or Implementation of the class, take the old class and wrap it inside the new class.
    - Class is a noun 
    - General Specialization - when factoring the commonality between various classes. 
        - Note: the more you factored out the more complex.
        - Build system that is flexible without adding complexity
    - In Larger Systems - keeping things as simple as possible is usually the best practice
    
Non portable code (ie native or concrete interface) - provide a wrapper. 

Objects 
    - Serializing - reconstruct the object after being send to the wire
    - Deserializing - deconstructing an object (Must use the same specification as serializing - normally non-propriteary). 
    - Marshalling - sending object to the wire 

Framework: It's about code re-use/plug and play though API
    - Contract: An API specification that the programmer has to follow
        - Abstract Class methods that has no implementation can be used as an API after it is instantiated.
            - For example: Each Child class must use the same syntax when implementing the same interface but can have their own implementation
        - Contract - not use as in a composition

Abstract Class 
    - methods within Abstracts have one or more methods that do not have implementation
    - It provides abstract and concrete methods
    - Use the keyword, "extends" to use Abstract Class
    - inheriting class must provide, it's own implentation of the interface method 

Interface 
    - methods within interface have no implementation at all
    - It provides only abstract accessor methods
    - Use the keyword, "implements" to use Interface Class

*/

class foo {
    static $my_static = 'foo'; //static means it shares one memory allocation each time it is instantiated. Warning, if the static variable is being used in one object that is running, the current object can potentially change the value from memory.
    var $firstname = ''; //object attribute
    var $lastname; //object attribute
    function call_foo(){
        echo "Calling foo.";
        $count; //local attribute
        this.my_static; //references the object attribute
    }
    function setFirstname($name){
        this.$firstname = fname;
    }
    function setLastName($lname){
        this.$lastname = $lname;
    }
    function getName(){
        return this.firstname + this.lastname; 
    }
}
$bar = new foo;
$bar->call_foo();
?>

<!-- Abstraction Makes the code remain unchanged when extended (getVal, and prefixVal); -->
<?php
abstract class AbstractClass
{
    // Force Extending class to define this method
    abstract protected function getVal();
    abstract protected function prefixVal($prefix);

    // Common method
    public function printOut() {
        print $this->getVal() . "\n";
    }
}

class ConcreteClass1 extends AbstractClass
{
    protected function getVal() {
        return "ConcreteClass1";
    }

    public function prefixVal($prefix) {
        return "{$prefix}ConcreteClass1";
    }
}

//Encapsulation
$class1 = new ConcreteClass1;
$class1->printOut();
echo $class1->prefixVal('FOO_') ."\n";
?>

<?php
class Application {
     private static $_user;
     public function User( ) {
          if( $this->_user == null ) {
               $this->_user = new UserData();
          }
          return $this->_user;
     }
}

class UserData {
     private $_name;
     public function __construct() {
          $this->_name = "Krishna kanth";
     }
     public function GetUserName() {
          return $this->_name;
     }
}
$app = new Application();
echo $app->UserData()->GetUserName();
?>


<!-- polymorphism: method overloading, method overriding, and operator overloading. -->
<?php
// Create Shape interace with calculateArea() method.
//ShapeInterface.php
interface Shape {
  public function calculateArea();
}
?>

<?php
require ShapeInterface.php;

// Create Circle class that implement Shape interface.
class Circle implements Shape {
  private $radius;
   
  public function __construct($radius)
  {
    $this -> radius = $radius;
  }
  
  // calcArea calculates the area of circles 
  public function calculateArea()
  {
    return $this -> radius * $this -> radius * pi();
  }
}
?>


<!-- Inheritance -->
<?php
// Declare the interface 'iTemplate'
interface iTemplate
{
    public function setVariable($name, $var);
    public function getHtml($template);
}

// Implement the interface
// This will work
class Template implements iTemplate
{
    private $vars = array();
  
    public function setVariable($name, $var)
    {
        $this->vars[$name] = $var;
    }
  
    public function getHtml($template)
    {
        foreach($this->vars as $name => $value) {
            $template = str_replace('{' . $name . '}', $value, $template);
        }
 
        return $template;
    }
}

?>