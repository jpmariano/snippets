// build our blueprint object
var MyBluePrint = function MyBluePrintObject() {
  
  this.someFunction = function someFunction() {
    alert( 'some function' );
  };
  
  this.someOtherFunction = function someOtherFunction() {
    alert( 'some other function' );
  };
  
  this.showMyName = function showMyName() {
    alert( this.name );
  };
  
};
 
function MyObject() {
  this.name = 'testing';
}
MyObject.prototype = new MyBluePrint();
 
// example usage
var testObject = new MyObject();
testObject.someFunction(); // alerts "some function"
testObject.someOtherFunction(); // alerts "some other function"
testObject.showMyName(); // alerts "testing"

/**************************************/

var peopleProto = function(){
	
};

peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.city = "no city";
peopleProto.prototype.printPerson = function(){
	console.log(this.name + "," + this.age + "," + this.city);
};

var person1 = new peopleProto();
person1.age = 34;
person1.name = "John";
person1.city = "CA";

//person1.printPerson();
console.log('name' in person1);
console.log(person1.hasOwnProperty('name'));