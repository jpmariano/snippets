<?php
/**
 * http://www.java2s.com/Code/Php/Design-Patterns/DesignPatternsDecorator.htm
 */
  class Name {
    private $firstName;
    private $lastName;

    function __construct($lastName_in, $firstName_in) {
      $this->firstName = $firstName_in;
      $this->lastName  = $lastName_in;
    }

    function getFirstName() {
        return $this->firstName;
    }

    function getLastName() {
        return $this->lastName;
    }

    function getFirstNameAndLastName() {
      return $this->getLastName() . ' by ' . $this->getFirstName();
    }
  }


  class LastNameDecorator {
  
    protected $name;
  public $lastName;
  
    public function __construct(Name $name_in) {
    $this->name = $name_in;
      $this->resetLastName();
    }
  
  function resetLastName() {
    $this->lastName = $this->name->getLastName();
  }

    function showLastName() {
    return $this->lastName;
  }

  }
  
  
  class LastNameExclaimDecorator extends LastNameDecorator {
  
    private $btd;

    public function __construct(LastNameDecorator $btd_in) {
       $this->btd = $btd_in;
    }

    function exclaimLastName() {
       $this->btd->lastName = "!" . $this->btd->lastName . "!";
  }
  }

  class LastNameStarDecorator extends LastNameDecorator {
  private $btd;
    public function __construct(LastNameDecorator $btd_in) {
    $this->btd = $btd_in;
    }

    function starLastName() {
    $this->btd->lastName = Str_replace(" ","*",$this->btd->lastName);
  }
  }
  
  
  
  $patternName = new Name("A","B");
        
  $decorator = new LastNameDecorator($patternName);
  $starDecorator = new LastNameStarDecorator($decorator);
  $exclaimDecorator = new LastNameExclaimDecorator($decorator);
  
  echo $decorator->showLastName();
  
  $exclaimDecorator->exclaimLastName();
  $exclaimDecorator->exclaimLastName();
  echo $decorator->showLastName();
  
  $starDecorator->starLastName();
  echo $decorator->showLastName();
  
  echo $decorator->resetLastName();
  echo $decorator->showLastName();      
?>
