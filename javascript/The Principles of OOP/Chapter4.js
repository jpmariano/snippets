/****************** Constructors **************************/
function Person() {
// intentionally empty
}
var person1 = new Person();
var person2 = new Person;
alert(person1 instanceof Person); // true
alert(person2 instanceof Person); // true
alert(person1.constructor === Person); // true - check the type of an instance
alert(person2.constructor === Person); // true
//Object Constructor in function notation
function Person(name) {
	this.name = name;
	this.sayName = function() {
		alert(this.name);
	};
}
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");

alert(person1.name); // "Nicholas"
alert(person2.name); // "Greg"
person1.sayName(); // outputs "Nicholas"
person2.sayName(); // outputs "Greg"

//Object Constructor in Object literal notation
function Person(name) {
  Object.defineProperty(this, "name", {
  get: function() {
    return name;
  },
  set: function(newName) {
  	name = newName;
  },
  enumerable: true,
  configurable: true
  });
  this.sayName = function() {
  	alert(this.name);
  };
}

var person1 = Person("Nicholas"); // note: missing "new"; It will create person1 which is equal of Person contractor but not an instance of Person
alert(person1 instanceof Person); // false
alert(typeof person1); // "undefined"
alert(name); // "Nicholas"

/****************** Prototypes **************************/
/*Almost every function
(with the exception of some built-in functions) has a prototype property
that is used during the creation of new instances.*/
var book = {
	title: "The Principles of Object-Oriented JavaScript"
};
alert("title" in book); // true
alert(book.hasOwnProperty("title")); // true
alert("hasOwnProperty" in book); // true
alert(book.hasOwnProperty("hasOwnProperty")); // false
alert(book.hasOwnProperty("title")); // true
alert(Object.prototype.hasOwnProperty("hasOwnProperty")); // true
//determine whether a property is on the prototype
function hasPrototypeProperty(object, name) {
	return name in object && !object.hasOwnProperty(name);
}
alert(hasPrototypeProperty(book, "title")); // false
alert(hasPrototypeProperty(book, "hasOwnProperty")); // true

var object = {};
//Object.getPrototypeOf reads the value of the [[Prototype]] property
var prototype = Object.getPrototypeOf(object);
alert(prototype === Object.prototype);

var object = {};
//isPrototypeOf - to see if one object is a prototype for another
alert(Object.prototype.isPrototypeOf(object)); // true

var object = {};
alert(object.toString()); // "[object Object]"
object.toString = function() {
	return "[object Custom]";
};
alert(object.toString()); // "[object Custom]"
// delete own property
delete object.toString;
alert(object.toString()); // "[object Object]"

// no effect on prototype - delete only works on own properties
delete object.toString;
console.log(object.toString()); // "[object Object]"

/****************** Using Prototypes with Constructors **************************/
function Person(name) {
	this.name = name;
}
//careful when using reference values. Because these values are shared across instances,
Person.prototype.sayName = function() {
	alert(this.name);
};
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
alert(person1.name); // "Nicholas"
alert(person2.name); // "Greg"
person1.sayName(); // outputs "Nicholas"
person2.sayName(); // outputs "Greg"


function Person(name) {
	this.name = name;
}
Person.prototype.sayName = function() {
	alert(this.name);
};
//favorites is shared using prototype
Person.prototype.favorites = [];
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
person1.favorites.push("pizza");
person2.favorites.push("quinoa");
alert(person1.favorites); // "pizza,quinoa"
alert(person2.favorites); // "pizza,quinoa"

//Constructor
function Person(name) {
	this.name = name;
}
//To avoid overwriting prototype object , restore the constructor property
Person.prototype = {
  constructor: Person,
  sayName: function() {
  	alert(this.name);
  },
  toString: function() {
  return "[Person " + this.name + "]";
  }
};
//Instances
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
alert(person1 instanceof Person); // true
alert(person1.constructor === Person); // true
alert(person1.constructor === Object); // false
alert(person2 instanceof Person); // true
alert(person2.constructor === Person); // true
alert(person2.constructor === Object); // false
/*
See Page 60. For Image
Note: disruption between the instance and the prototype will also create a disruption between the
instance and the constructor.
*/

function Person(name) {
	this.name = name;
}
Person.prototype = {
  constructor: Person,
  sayName: function() {
  	alert(this.name);
  },
  toString: function() {
  	return "[Person " + this.name + "]";
  }
};
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
alert("sayHi" in person1); // false
alert("sayHi" in person2); // false

// add a new method (changes the prototype as well as the instances)
Person.prototype.sayHi = function() {
	alert("Hi");
};
person1.sayHi(); // outputs "Hi"
person2.sayHi(); // outputs "Hi"
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
Object.freeze(person1);
Person.prototype.sayHi = function() {
	alert("Hi");
};
person1.sayHi(); // outputs "Hi"
person2.sayHi(); // outputs "Hi"



function Person(name) {
	this.name = name;
}
Person.prototype = {
  constructor: Person,
  sayName: function() {
  	alert(this.name);
  },
  toString: function() {
  	return "[Person " + this.name + "]";
  }
};
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
Object.freeze(person1);
//Even though person1 is freeze, you can still change the constructor prototype where it inhireted
Person.prototype.sayHi = function() {
	alert("Hi");
};
person1.sayHi(); // outputs "Hi"
person2.sayHi(); // outputs "Hi"


/****************** Built-in Object Prototypes **************************/

//All built-in objects have constructors, and therefore, they have prototypes that you can change
//adding a new method for use on all arrays is as simple as modifying Array.prototype
Array.prototype.sum = function() {
	return this.reduce(function(previous, current) {
		return previous + current;
	});
};
var numbers = [ 1, 2, 3, 4, 5, 6 ];
var result = numbers.sum();
alert(result); // 21


String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.substring(1);
};
var message = "hello world!";
alert(message.capitalize()); // "Hello world!"




