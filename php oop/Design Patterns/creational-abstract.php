<?php
/**
 * 
 * Reference: http://code.tutsplus.com/tutorials/the-whens-and-whys-for-php-design-patterns--net-27862
 * When: You need to connect objects and maintain flexibility.
 * Why: Because it is the simplest way to achieve flexibility, while respecting both the dependency inversion principle and the open close principle
 */
/*
 * BookFactory classes
 */
abstract class AbstractBookFactory {
    abstract function makePHPBook();
    abstract function makeMySQLBook();
}

class OReillyBookFactory extends AbstractBookFactory {
    private $context = "OReilly";
    function makePHPBook() {
        return new OReillyPHPBook;
    }
    function makeMySQLBook() {
        return new OReillyMySQLBook;
    }
}

class SamsBookFactory extends AbstractBookFactory {
    private $context = "Sams";
    function makePHPBook() {
        return new SamsPHPBook;
    }
    function makeMySQLBook() {
        return new SamsMySQLBook;
    }
}


/*
 *   Book classes
 */
abstract class AbstractBook {
    abstract function getAuthor();
    abstract function getTitle();
}

abstract class AbstractMySQLBook extends AbstractBook {
    private $subject = "MySQL";
}

		class OReillyMySQLBook extends AbstractMySQLBook {
		    private $author;
		    private $title;
		    function __construct() {
		        $this->author = 'George Reese, Randy Jay Yarger, and Tim King';
		        $this->title = 'Managing and Using MySQL';
		    }
		    function getAuthor() {
		        return $this->author;
		    }
		    function getTitle() {
		        return $this->title;
		    }
		}
		
		class SamsMySQLBook extends AbstractMySQLBook {
		    private $author;
		    private $title;
		    function __construct() {
		        $this->author = 'Paul Dubois';
		        $this->title = 'MySQL, 3rd Edition';
		    }
		    function getAuthor() {
		        return $this->author;
		    }
		    function getTitle() {
		        return $this->title;
		    }
		}

abstract class AbstractPHPBook extends AbstractBook {
    private $subject = "PHP";
}

		class OReillyPHPBook extends AbstractPHPBook {
		    private $author;
		    private $title;
		    private static $oddOrEven = 'odd';
		    function __construct()
		    {
		        //alternate between 2 books
		        if ('odd' == self::$oddOrEven) {
		            $this->author = 'Rasmus Lerdorf and Kevin Tatroe';
		            $this->title = 'Programming PHP';
		            self::$oddOrEven = 'even';
		        }
		        else {
		            $this->author = 'David Sklar and Adam Trachtenberg';
		            $this->title = 'PHP Cookbook';
		            self::$oddOrEven = 'odd';
		        }
		    }
		    function getAuthor() {
		        return $this->author;
		    }
		    function getTitle() {
		        return $this->title;
		    }
		}
		
		class SamsPHPBook extends AbstractPHPBook {
		    private $author;
		    private $title;
		    function __construct() {
		        //alternate randomly between 2 books
		        mt_srand((double)microtime() * 10000000);
		        $rand_num = mt_rand(0, 1);
		
		        if (1 > $rand_num) {
		            $this->author = 'George Schlossnagle';
		            $this->title = 'Advanced PHP Programming';
		        }
		        else {
		            $this->author = 'Christian Wenz';
		            $this->title = 'PHP Phrasebook';
		        }
		    }
		    function getAuthor() {
		        return $this->author;
		    }
		    function getTitle() {
		        return $this->title;
		    }
		}

/*
 *   Initialization
 */

  writeln('BEGIN TESTING ABSTRACT FACTORY PATTERN');
  writeln('');

  writeln('testing OReillyBookFactory');
  //Create a new OReillyBookFactory object
  $bookFactoryInstance = new OReillyBookFactory;
  testConcreteFactory($bookFactoryInstance);
  writeln('');

  writeln('testing SamsBookFactory');
  //Create a new SamsBookFactory object
  $bookFactoryInstance = new SamsBookFactory;
  //Start the testConcreteFactory 
  testConcreteFactory($bookFactoryInstance);

  writeln("END TESTING ABSTRACT FACTORY PATTERN");
  writeln('');
 
  function testConcreteFactory($bookFactoryInstance)
  {   // bookFactoryInstance(Factory) - creates the makePHPBook
      $phpBookOne = $bookFactoryInstance->makePHPBook();
      writeln('first php Author: '.$phpBookOne->getAuthor());
      writeln('first php Title: '.$phpBookOne->getTitle());
      
	  // bookFactoryInstance(Factory) - creates the makePHPBook
      $phpBookTwo = $bookFactoryInstance->makePHPBook();
      writeln('second php Author: '.$phpBookTwo->getAuthor());
      writeln('second php Title: '.$phpBookTwo->getTitle());
      
	  // bookFactoryInstance(Factory) - creates the makeMySQLBook
      $mySqlBook = $bookFactoryInstance->makeMySQLBook();
      writeln('MySQL Author: '.$mySqlBook->getAuthor());
      writeln('MySQL Title: '.$mySqlBook->getTitle());
  }

  function writeln($line_in) {
    echo $line_in."<br/>";
  }

?>