
/****************** Functions **************************/
//Function Declaration - you can call this function before or after declaring it.
function add(num1, num2) {
	return num1 + num2;
}

var result = add(5, 5);
alert(result);

//Function Expression -  needs to be declared before calling it
var add = function(num1, num2) {
	return num1 + num2;
};

var result = add(5, 5);
alert(result);


//Function as value
var sayHi = new Function("console.log(\"Hi!\");");
	sayHi(); // outputs "Hi!"
var sayHi2 = sayHi;
	sayHi2(); // outputs "Hi!"

var numbers = [ 1, 5, 8, 4, 7, 10, 2, 6 ];


numbers.sort();
alert(numbers); // "[1, 10, 2, 4, 5, 6, 7, 8]"

numbers.sort(function(first, second) {
	return first - second;
});
alert(numbers); // "[1, 2, 4, 5, 6, 7, 8, 10]"

function sayMessage(message) {
	alert(message);
}
function sayMessage() {
	alert("Default message");
}
sayMessage("Hello!"); // multiple functions with the same name, the one that appears last in your code wins
/****************** Parameters **************************/
//Function as sum
function sum() {
	var result = 0,
	i = 0,
	len = arguments.length;
	while (i < len) {
		result += arguments[i];
		i++;
	}
	return result;
}
	alert(sum(1, 2)); // 3
	alert(sum(3, 4, 5, 6)); // 18
	alert(sum(50)); // 50
	alert(sum()); // 0

	
	
// Function Argument	
function reflect(value) {
	return value;
}
alert(reflect("Hi!")); // "Hi!"
alert(reflect("Hi!", 25)); // "Hi!" --> drops 25 because there's no placeholder
alert(reflect.length); // 1 --> Because there's a paramerter 

reflect = function() {
	return arguments[0];
};
alert(reflect("Hi!")); // "Hi!"
alert(reflect("Hi!", 25)); // "Hi!"--> drops 25 because there's no placeholder
alert(reflect.length); // 0 --> Because there's no paramerter 

/****************** Overloading **************************/

function sayMessage(message) {
	if (arguments.length === 0) {
	message = "Default message";
	}
	alert(message);
}
sayMessage("Hello!"); // outputs "Hello!"

/****************** Object Methods **************************/
var person = {
	name: "Nicholas",
	sayName: function() {
			alert(this.name);
		}
	};
person.sayName(); // outputs "Nicholas"





function sayNameForAll() {
	alert(this.name);
}
var person1 = {
	name: "Nicholas",
	sayName: sayNameForAll
};
var person2 = {
	name: "Greg",
	sayName: sayNameForAll
};
name = "Michael";
person1.sayName(); // outputs "Nicholas"
person2.sayName(); // outputs "Greg"
sayNameForAll(); // outputs "Michael"

//call method
function sayNameForAll(label) {
	alert(label + ":" + this.name);
}
var person1 = {
	name: "Nicholas"
};
var person2 = {
	name: "Greg"
};
name = "Michael";
//call([thisObj[, arg1[, arg2[,  [, argN]]]]])
sayNameForAll.call(this, "global"); // outputs "global:Michael"
sayNameForAll.call(person1, "person1"); // outputs "person1:Nicholas"
sayNameForAll.call(person2, "person2"); // outputs "person2:Greg"


//apply method -->apply() method works exactly the same as call() except that it accepts only two parameters
function sayNameForAll(label) {
	alert(label + ":" + this.name);
}
var person1 = {
	name: "Nicholas"
};
var person2 = {
	name: "Greg"
};
name = "Michael";
sayNameForAll.apply(this, ["global"]); // outputs "global:Michael"
sayNameForAll.apply(person1, ["person1"]); // outputs "person1:Nicholas"
sayNameForAll.apply(person2, ["person2"]); // outputs "person2:Greg"


//Bind method 
function sayNameForAll(label) {
  alert(label + ":" + this.name);
}
var person1 = {
  name: "Nicholas"
};
var person2 = {
  name: "Greg"
};

//fun.bind(thisArg[, arg1[, arg2[, ...]]])
// create a function just for person1
var sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1("person1"); // outputs "person1:Nicholas"
// create a function just for person2
var sayNameForPerson2 = sayNameForAll.bind(person2, "person2");
sayNameForPerson2(); // outputs "person2:Greg"
// attaching a method to an object doesn't change 'this'
person2.sayName = sayNameForPerson1;
person2.sayName("person2"); // outputs "person2:Nicholas"
