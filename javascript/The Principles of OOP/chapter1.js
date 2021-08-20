/****************** Primitive and Reference Types **************************/

/****************** Primitive Types **************************/
// strings
var name = "Nicholas";
var selection = "a";
// numbers
var count = 25;
var cost = 1.51;
// boolean
var found = true;
// null
var object = null;
// undefined
var flag = undefined;
var ref; // assigned undefined automatically

/*Even though color1 and color2 contain the same value, they are
completely separate from each other, and you can change the value in color1
without affecting color2 and vice versa.*/
var color1 = "red";
var color2 = color1;

/****************** Identifying Primitive Types **************************/
//typeof operator
alert(typeof "Nicholas"); // "string"
alert(typeof 10); // "number"
alert(typeof 5.1); // "number"
alert(typeof true); // "boolean"
alert(typeof undefined); // "undefined"

alert(typeof null); // "object" internal javascript error 
//Proper way to check null
alert(value === null);

//Comparing Without Coercion
alert(undefined == null); // true
alert(undefined === null); // false

/****************** Primitive Methods**************************/
var name = "Nicholas";
var lowercaseName = name.toLowerCase(); // convert to lowercase
var firstLetter = name.charAt(0); // get first character
var middleOfName = name.substring(2, 5); // get characters 2-4
var count = 10;
var fixedCount = count.toFixed(2); // convert to "10.00"
var hexCount = count.toString(16); // convert to "a"
var flag = true;
var stringFlag = flag.toString(); // convert to "true"

/****************** Reference Types **************************/
//Creating Objects
//do not store the object directly into the variable
//it holds a pointer (or reference) to the location in memory where the object exists.
//Both object1 and object2 point to the same object inside the memory
var object1 = new Object(); 
var object2 = object1;

//Dereferencing Objects (object variable to null)  
//SideNote:JavaScript is a garbage-collected language
var object1 = new Object();
// do something
object1 = null; // dereference

//Adding or Removing Properties
var object1 = new Object();
var object2 = object1;
object1.myCustomProperty = "Awesome!";
alert(object2.myCustomProperty); // "Awesome!"

/****************** Instantiating Built-in Types **************************/
var items = new Array();
var now = new Date();
var error = new Error("Something bad happened.");
var func = new Function("console.log('Hi');");
var object = new Object();
var re = new RegExp("\\d+");

//Literal Forms
//Object Literals
	//using identifier
	var book = {
		name: "The Principles of Object-Oriented JavaScript",
		year: 2014
	};
	//using string (Same as above)
	var book = {
		"name": "The Principles of Object-Oriented JavaScript",
		"year": 2014
	};
	//(Same as both above)
	var book = new Object();
	book.name = "The Principles of Object-Oriented JavaScript";
	book.year = 2014;
	
//Array Literals
var colors = [ "red", "blue", "green" ];
alert(colors[0]); // "red"

var colors = new Array("red", "blue", "green")
alert(colors[0]); // "red

//Function Literals
function reflect(value) {
	return value;
}
//constructor form (The same result as above)
var reflect = new Function("value", "return value;");

//Regular Expression Literals
var numbers = /\d+/g;
var numbers = new RegExp("\\d+", "g"); //same as above

/****************** Instantiating Built-in Types **************************/
//Properties are name/value pairs that are stored on an object

var array = [];
//dot notation
array.push(12345);
//bracket notation (Same as above)
array["push"](12345);
//Dynamic approach (Same as above)
var method = "push";
array[method](12345);

/****************** Identifying Reference Types  **************************/
//typeof operator
function reflect(value) {
	return value;
}
alert(typeof reflect); // "function"

//instanceof operator
var items = [];
var object = {};
function reflect(value) {
	return value;
}
alert(items instanceof Array); // true
alert(items instanceof Object); // true
alert(object instanceof Object); // true
alert(object instanceof Array); // false
alert(reflect instanceof Function); // true
alert(reflect instanceof Object); // true

//Identifying Arrays using isArray()
var items = [];
alert(Array.isArray(items)); // true

/****************** Primitive Wrapper Types  **************************/
/* primitive wrapper types are reference types that are automatically created behind 
the scenes whenever strings, numbers, or Booleans*/
var name = "Nicholas";
var firstChar = name.charAt(0);
console.log(firstChar); // "N"

//behind the scenes
// what the JavaScript engine does
var name = "Nicholas";
var temp = new String(name); //JavaScript engine creates an instance of String so that charAt(0) will work
var firstChar = temp.charAt(0);
temp = null;
console.log(firstChar);


var name = "Nicholas";
name.last = "Zakas";
alert(name.last); // undefined


//behind the scenes
// what the JavaScript engine does
var name = "Nicholas";
var temp = new String(name);
temp.last = "Zakas";
temp = null; // temporary object destroyed
var temp = new String(name);
console.log(temp.last); // undefined
temp = null;

var name = "Nicholas";
var count = 10;
var found = false;
alert(name instanceof String); // false
alert(count instanceof Number); // false
alert(found instanceof Boolean); // false


var name = new String("Nicholas");
var count = new Number(10);
var found = new Boolean(false);
alert(typeof name); // "object"
alert(typeof count); // "object"
alert(typeof found); // "object"
alert(name instanceof String); // true
alert(count instanceof Number); // true
alert(found instanceof Boolean); // true

var found = new Boolean(false);
if (found) {
	alert("Found"); // this executes
}


