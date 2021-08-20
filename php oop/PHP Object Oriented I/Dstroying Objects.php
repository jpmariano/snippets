<?php
/* __destruct Calling this function gives you the opportunity to perform any last - minute clean - up (such as closing file
handles or database connections that might have been opened by the class), or any other last - minute
housekeeping that might be needed before the object is destroyed*/

/*Sample Database
CREATE TABLE “widget” (
    “widgetid” SERIAL PRIMARY KEY NOT NULL,
    “name” varchar(255) NOT NULL,
    “description” text
    );
    
INSERT INTO “widget” (“name”, “description”)
VALUES(‘Foo’, ‘This is a footacular widget!’);
*/

//filename: class.Widget.php
class Widget {
  private $id;
  private $name;
  private $description; private $hDB;
  private $needsUpdating = false;
  public function __construct($widgetID) {
//The widgetID parameter is the primary key of a
//record in the database containing the information
//for this object
//Create a connection handle and store it in a private member variable
//This code assumes the DB is called “parts”
  $this-> hDB = pg_connect(‘dbname=parts user=postgres’);
    if(! is_resource($this- > hDB)) {
        throw new Exception(‘Unable to connect to the database.’);
      }
  $sql = “SELECT \”name”, \”description\” FROM widget WHERE widgetid = $widgetID”;
  $rs = pg_query($this- > hDB, $sql);
  if(! is_resource($rs)) {
     throw new Exception(“An error occurred selecting from the database.”);
    }
  if(! pg_num_rows($rs)) {
      throw new Exception(‘The specified widget does not exist!’);
    }
    
  $data = pg_fetch_array($rs);
  $this- > id = $widgetID;
  $this- > name = $data[‘name’];
  $this- > description = $data[‘description’];
  }
  
  public function getName() {
    return $this- > name;
    }
    
  public function getDescription() {
    return $this- > description;
    }
    
  public function setName($name) {
    $this- > name = $name;
    $this- > needsUpdating = true;
  }
  
  public function setDescription($description) {
    $this- > description = $description;
    $this- > needsUpdating = true;
  }
  public function __destruct() {
    if($this- > needsUpdating) {
      $sql = ‘UPDATE “widget” SET ‘;
      $sql .= “\”name\” = ‘” . pg_escape_string($this- > name) . “’, “;
      $sql .= “\”description\” = ‘” .
      pg_escape_string($this- > description) . “’”;
      $sql .= “WHERE widgetID = “ . $this- > id;
      $rs = pg_query($this- > hDB, $sql);
      }
  //We ’ re done with the database. Close the connection handle.
  pg_close($this- > hDB);
  }
}


//filename:testWidget.php
require_once(‘class.Widget.php’);
  try {
        $objWidget = new Widget(1);
        print “Widget Name: “ . $objWidget- > getName() . “ < br > \n”;
        print “Widget Description: “ . $objWidget- > getDescription() . “ < br > \n”;
        $objWidget- > setName(‘Bar’);
        $objWidget- > setDescription(‘This is a bartacular widget!’);
      } catch (Exception $e) {
     die(“There was a problem: “ . $e- > getMessage());
  }
  
  /*output
  1st run:
  
  Widget Name: Foo
  Widget Description: This is a footacular widget!
  
  Any subsequent call should display as follows:
  
  Widget Name: Bar
  Widget Description: This is a bartacular widget!