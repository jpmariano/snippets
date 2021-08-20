<?php
/** Reference: http://code.tutsplus.com/tutorials/the-whens-and-whys-for-php-design-patterns--net-27862
* When: Flexibility and reusability is more important than simplicity.
* Why: Use it to implement big, interchangeable chunks of complicated logic, while keeping a common algorithm signature.
*/
//Example 1
interface OutputInterface
{
    public function load();
}
    //strategy 1
	class SerializedArrayOutput implements OutputInterface
	{
	    public function load()
	    {
	        return serialize($arrayOfData);
	    }
	}
	
	 //strategy 2
	class JsonStringOutput implements OutputInterface
	{
	    public function load()
	    {
	        return json_encode($arrayOfData);
	    }
	}
	
	 //strategy 3
	class ArrayOutput implements OutputInterface
	{
	    public function load()
	    {
	        return $arrayOfData;
	    }
	}
	
	
//The class to which the object is created from

class SomeClient
{
    private $output;

    public function setOutput(OutputInterface $outputType)
    {
        $this->output = $outputType;
    }

    public function loadOutput()
    {
        return $this->output->load();
    }
}


/*** Create a New Object ***/
$client = new SomeClient();

// Want an array? /**** Assign a ArrayOutput Strategy to the new Object ****/
$client->setOutput(new ArrayOutput());
$data = $client->loadOutput();

// Want some JSON? /**** Assign a JsonStringOutput Strategy to the new Object ****/
$client->setOutput(new JsonStringOutput());
$data = $client->loadOutput();

?>


























<?php
//Example 2
interface IStrategy
{
  function filter( $record );
}
    //strategy 1
	class FindAfterStrategy implements IStrategy
	{
	  private $_name;
	
	  public function __construct( $name )
	  {
	    $this->_name = $name;
	  }
	
	  public function filter( $record )
	  {
	    return strcmp( $this->_name, $record ) <= 0;
	  }
	}
	
	//strategy 2
	class RandomStrategy implements IStrategy
	{
	  public function filter( $record )
	  {
	    return rand( 0, 1 ) >= 0.5;
	  }
	}


//The class to which the object is created from
class UserList
{
  private $_list = array();

  public function __construct( $names )
  {
    if ( $names != null )
    {
      foreach( $names as $name )
      {
        $this->_list []= $name;
      }
    }
  }

  public function add( $name )
  {
    $this->_list []= $name;
  }

  public function find( $filter )
  {
    $recs = array();
    foreach( $this->_list as $user )
    {
      if ( $filter->filter( $user ) )
        $recs []= $user;
    }
    return $recs;
  }
}

$ul = new UserList( array( "Andy", "Jack", "Lori", "Megan" ) );


/**** Assign a ArrayOutput FindAfterStrategy to the new Object ****/
$f1 = $ul->find( new FindAfterStrategy( "J" ) );
print_r( $f1 );
/*The test code runs the same user lists against two strategies and shows the results. 
 In the first case, the strategy looks for any name that sorts after J, so you get Jack, Lori, 
 and Megan. */
 
 
 /**** Assign a ArrayOutput RandomStrategy to the new Object ****/
$f2 = $ul->find( new RandomStrategy() );
print_r( $f2 );
 /*The second strategy picks names randomly and yields different results every time. 
In this case, the results are Andy and Megan.*/


// Outputphp strategy.php 
/*
Array
(
    [0] => Jack
    [1] => Lori
    [2] => Megan
)
Array
(
    [0] => Andy
    [1] => Megan
)
*/
?>