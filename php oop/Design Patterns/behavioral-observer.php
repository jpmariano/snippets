<?php
/**
 * 
 * Reference: http://code.tutsplus.com/tutorials/the-whens-and-whys-for-php-design-patterns--net-27862
 * When: To provide a notification system inside your business logic or to the outside world.
 * Why: The pattern offers a way to communicate events to any number of different objects.
 */
//Observer
interface IObserver
{
  function onChanged( $sender, $args );
}

//subject being observed
interface IObservable
{
  function addObserver( $observer );
}

//when IObservable is updated or change
class UserList implements IObservable
{
  private $_observers = array();

  public function addCustomer( $name )
  {
    foreach( $this->_observers as $obs )
      $obs->onChanged( $this, $name );
  }

  public function addObserver( $observer )
  {
    $this->_observers []= $observer;
  }
}

//Listener
class UserListLogger implements IObserver
{
  public function onChanged( $sender, $args )
  {
    echo( "'$args' added to user list\n" );
  }
}

$ul = new UserList(); // Creates an object when subject is updated or change
$ul->addObserver( new UserListLogger() ); //add the listener
$ul->addCustomer( "Jack" ); //the trigger
?>
