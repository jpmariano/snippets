function person(name) {
	this.name = name;
    this.basicInfo=function(age, weight) {
      return "My name is " + this.name + ". " +
        "I am " + age + " years old " +
        "and weighs " + weight +" kilo.";
    }
  }

function employee(){
    this.salaryInfo=function(salary) {
      return "I earn " + salary + " dollar.";
    }
  }

//employee function inherits all person function
employee.prototype = new person();

//assign person constructor to employee.prototype
employee.prototype.contstructor = person;

alert(employee.prototype.contstructor === person);

//Initialize  employee.prototype constructor
employee.prototype.contstructor('karen');

//create new employee object
var empInstance = new employee();

//check if empInstance inherits from person and employee
alert(empInstance instanceof person);
alert(empInstance instanceof employee);


//accessing inherited methods of empInstance
alert(empInstance.basicInfo(15,200));
alert(empInstance.salaryInfo(2000));

//overriding inherited methods
employee.prototype.basicInfo = function(age, sex) {
    return "I am " + age + " years old " +
    "and I am a  " + sex + "." ;
}

alert(empInstance.basicInfo(21,"female"));

//adding method to employee object
employee.prototype.job = function job(jobTitle){
	 return "My job is" + jobTitle + ".";
}

alert(empInstance.job("programmer"));