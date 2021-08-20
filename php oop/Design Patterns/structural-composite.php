<?php
/**
 * http://www.java2s.com/Code/Php/Design-Patterns/PHPDesignPatternsComposite.htm
 */
 abstract class StudentManager {
    abstract function getStudent($previousStudent);

    abstract function getStudentCount();
    abstract function setStudentCount($new_count);

    abstract function addStudent($oneStudent);
    abstract function removeStudent($oneStudent);
 }
  
class SingleStudentClass extends StudentManager {
    private $firstName;
    private $lastName;

    function __construct($firstName, $lastName) {
      $this->firstName = $firstName;
      $this->lastName = $lastName;
    }

    function getStudent($studentToGet) {
      if (1 == $studentToGet) {
        return $this->firstName." by ".$this->lastName;
      } else {
        return FALSE;
      }
    }

    function getStudentCount() {
      return 1;
    }

    function setStudentCount($newCount) {
      return FALSE;
    }

    function addStudent($oneStudent) {
      return FALSE;
    }

    function removeStudent($oneStudent) {
      return FALSE;
    }

  }  
  
  
class MultipleStudentsClass extends StudentManager {

    private $oneStudents = array();
    private $studentCount;

    public function __construct() {
      $this->setStudentCount(0);
    }

    public function getStudentCount() {
      return $this->studentCount;
    }
    public function setStudentCount($newCount) {
      $this->studentCount = $newCount;
    }

    public function getStudent($studentToGet) {  
      if ($studentToGet <= $this->studentCount) {
        return $this->oneStudents[$studentToGet]->getStudent(1);
      } else {
        return FALSE;
      }
    }

    public function addStudent($oneStudent) {
      $this->setStudentCount($this->getStudentCount() + 1);
      $this->oneStudents[$this->getStudentCount()] = $oneStudent;
      return $this->getStudentCount();
    }

    public function removeStudent($oneStudent) {
      $counter = 0;
      while (++$counter <= $this->getStudentCount()) {
        if ($oneStudent->getStudent(1) == 
          $this->oneStudents[$counter]->getStudent(1)) {
          for ($x = $counter; $x < $this->getStudentCount(); $x++) {
            $this->oneStudents[$x] = $this->oneStudents[$x + 1];
          }
          $this->setStudentCount($this->getStudentCount() - 1);
        }
      }
      return $this->getStudentCount();
    }

  }
  
  
$firstStudent =  new SingleStudentClass("A","B");
echo $firstStudent->getStudent(1);
echo "<BR>";


$secondStudent = new SingleStudentClass("C", "D");
echo $secondStudent->getStudent(1);
echo "<BR>";

$students = new MultipleStudentsClass();
$studentsCount = $students->addStudent($firstStudent);
echo $students->getStudent($studentsCount);
echo "<BR>";

$studentsCount = $students->addStudent($secondStudent);
echo $students->getStudent($studentsCount);
echo "<BR>";

$studentsCount = $students->removeStudent($firstStudent);
echo $students->getStudentCount();
echo "<BR>";
  
echo $students->getStudent(1);
echo "<BR>";
?>  

         