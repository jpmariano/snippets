<?php
//This is perfect replacement for a complex if else

//Command
interface ICommand
{
  function onCommand( $name, $args );
}

class UserCommand implements ICommand
{
  public function onCommand( $name, $args )
  {
    if ( $name != 'addUser' ) return false;
    echo( "UserCommand handling 'addUser'\n" );
    return true;
  }
}


class MailCommand implements ICommand
{
  public function onCommand( $name, $args )
  {
    if ( $name != 'mail' ) return false;
    echo( "MailCommand handling 'mail'\n" );
    return true;
  }
}


//Receiver
class CommandChain
{
  private $_commands = array();

  public function addCommand( $cmd )
  {
    $this->_commands []= $cmd;
  }

  public function runCommand( $name, $args )
  {
    foreach( $this->_commands as $cmd )
    {
      if ( $cmd->onCommand( $name, $args ) )
        return;
    }
  }
}





$cc = new CommandChain();
//The Receiver Receives the command
$cc->addCommand( new UserCommand() );
$cc->addCommand( new MailCommand() );
//$cc now has two functions





//Invoker
$cc->runCommand( 'addUser', null ); //This will run by the UserCommand
$cc->runCommand( 'mail', null );//This will run by the MailCommand
?>

