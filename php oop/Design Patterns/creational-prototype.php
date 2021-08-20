<?php
/**
 * 
 * Reference: http://www.jakowicz.com/prototype-pattern-in-php/
 * create objects by cloning existing objects instead of initializing new objects.
 * cloning is for sure less processor intensive 
 * Cloning objects in PHP is extremely easy due to its magic __clone() method
 */

class MyCloneable
{
    public $object1;
    public $object2;
    function __clone() {
        // Force a copy of this->object, otherwise it will point to same object.
        $this->object1 = clone $this->object1;
    }
}


class SubObject
{
    static $instances = 0;
    public $instance;
    public function __construct() {
        $this->instance = ++self::$instances;
    }
    public function __clone() {
        $this->instance = ++self::$instances;
    }
}



$obj = new MyCloneable();


//MyCloneable's object1 gets instantiated with SubObject()
$obj->object1 = new SubObject();
//MyCloneable's object2 gets instantiated with SubObject()
$obj->object2 = new SubObject();

//Actual Cloning process
$obj2 = clone $obj;

print("Original Object:\n");
print_r($obj);
print_r('</br>');
print("Cloned Object:\n");
print_r($obj2);

?>
<?php 
/* Output
	Original Object:
	MyCloneable Object
	(
	    [object1] => SubObject Object
	        (
	            [instance] => 1
	        )
	
	    [object2] => SubObject Object
	        (
	            [instance] => 2
	        )
	
	)
 
	Cloned Object:
	MyCloneable Object
	(
	    [object1] => SubObject Object
	        (
	            [instance] => 3
	        )
	
	    [object2] => SubObject Object
	        (
	            [instance] => 2
	        )
	
	)
*/
?>
<?
/**
 * A class to represent the CocaCola drink
 */
class CocaCola {
    
    private $fizzy;
    private $healthy;
    private $tasty;
 
    /**
     * init a CocaCola drink
     */
    public function __construct() {
        $this->fizzy   = true;
        $this->healthy = false;
        $this->tasty   = true;
    }
 
    /**
     * This magic method is required, even if empty as part of the prototype pattern
     */
    public function __clone() {
    }
 
}
 
$cola = new CocaCola();
 
/*
 * object(CocaCola)#1 (3) {
 *   ["fizzy":"CocaCola":private]=>
 *   bool(true)
 *   ["healthy":"CocaCola":private]=>
 *   bool(false)
 *   ["tasty":"CocaCola":private]=>
 *   bool(true)
 * }
 */
print_r('</br>');
var_dump($cola);
 
$colaClone = clone $cola;
 
/*
 * object(CocaCola)#2 (3) {
 *   ["fizzy":"CocaCola":private]=>
 *   bool(true)
 *   ["healthy":"CocaCola":private]=>
 *   bool(false)
 *   ["tasty":"CocaCola":private]=>
 *   bool(true)
 * }
 */
 print_r('</br>');
 var_dump($colaClone);

 //http://designpatternsphp.readthedocs.io/en/latest/Creational/Prototype/README.html

 abstract class BookPrototype {
    /**
     * @var string
     */
    protected $title;

    /**
     * @var string
     */
    protected $category;

    abstract public function __clone();

    public function getTitle() {
        return $this->title;
    }

    public function setTitle($title)
    {
        $this->title = $title;
    }
}

class BarBookPrototype extends BookPrototype {
    /**
     * @var string
     */
    protected $category = 'Bar';

    public function __clone()
    {
    }
}

class FooBookPrototype extends BookPrototype {
    /**
     * @var string
     */
    protected $category = 'Foo';

    public function __clone()
    {
    }
}



$fooPrototype = new FooBookPrototype();
$barPrototype = new BarBookPrototype();

     print_r('</br>');
	$fbook = clone $fooPrototype;
	$fbook->setTitle('Foo Book No ');
   	print_r($fbook->getTitle()); 

    print_r('</br>');
	$bbook = clone $barPrototype;
	$bbook->setTitle('Bar Book No ');
 	print_r($bbook->getTitle()); 