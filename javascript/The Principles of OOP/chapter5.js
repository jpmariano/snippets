/****************** Prototype Chaining and Object.prototype **************************/
// Inheritance
//Prototype Chaining - An object inherits from its prototype, while that prototype in turn inherits from its prototype, and so on.
//Object.prototype - object literal has its [[Prototype]] set to Object.prototype, meaning that it inherits properties from Object.prototype

/*
Methods Inherited from Object.prototype
- hasOwnProperty() Determines whether an own property with the given name exists
- propertyIsEnumerable() Determines whether an own property is enumerable
- isPrototypeOf() Determines whether the object is the prototype of another
- valueOf() Returns the value representation of the object
- toString() Returns a string representation of the object
*/

var now = new Date();
var earlier = new Date(2010, 1, 1);
//valueOf() method gets called whenever an operator is used
alert(now > earlier); // true


var book = {
	title: "The Principles of Object-Oriented JavaScript"
};
var message = "Book = " + book;
alert(message); // "Book = [object Object]"


var book = {
	title: "The Principles of Object-Oriented JavaScript",
	toString: function() {
		return "[Book " + this.title + "]"
	}
};
var message = "Book = " + book;
// "Book = [Book The Principles of Object-Oriented JavaScript]"
alert(message);

/****************** Modifying Object.prototype **************************/
Object.prototype.add = function(value) {
	return this + value;
};
var book = {
	title: "The Principles of Object-Oriented JavaScript"
};
alert(book.add(5)); // "[object Object]5"
alert("title".add("end")); // "titleend"
// in a web browser
alert(document.add(true)); // "[object HTMLDocument]true"
alert(window.add(5)); // "[object Window]true"

//Object.prototype.add() is an enumerable property, which means it will show up when you use a for-in loop,
Object.prototype.add = function(value) {
	return this + value;
};
var empty = {};
for (var property in empty) {
 alert(property);
}


//hasOwnProperty - effective against possible unwanted prototype properties
Object.prototype.add = function(value) {
	return this + value;
};
var empty = {};
for (var property in empty) {
  if (empty.hasOwnProperty(property)) {
    alert(property);
  }
}

/****************** Object Inheritance **************************/
//object literal
var book = {
	title: "The Principles of Object-Oriented JavaScript"
};

//Object.create() - explicitly specify [[Prototype]]
var book = Object.create(Object.prototype, { //This book is the same as above
  title: {
  configurable: true,
  enumerable: true,
  value: "The Principles of Object-Oriented JavaScript",
  writable: true
  }
});


//person1 object inherits from Object.prototype
var person1 = {
	//property
	name: "Nicholas",
	//method
	sayName: function() {
		alert(this.name);
	}
};
//person2 object inherits from person1
var person2 = Object.create(person1, {
  //name shadow property
  name: {
    configurable: true,
    enumerable: true,
    value: "Greg",
    writable: true
  }
});
person1.sayName(); // outputs "Nicholas"
person2.sayName(); // outputs "Greg"
alert(person1.hasOwnProperty("sayName")); // true
alert(person1.isPrototypeOf(person2)); // true
alert(person2.hasOwnProperty("sayName")); // false
//see figure: Figure 5-1

//object with no prototype chain
var nakedObject = Object.create(null);
alert("toString" in nakedObject); // false
alert("valueOf" in nakedObject); // false

/****************** Constructor Inheritance **************************/

// you write this (Super Type)
function YourConstructor() {
	// initialization
}
// JavaScript engine does this for you behind the scenes (Sub Type)
YourConstructor.prototype = Object.create(Object.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: YourConstructor
    writable: true
  }
});




//constructors
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype.getArea = function() {
	return this.length * this.width;
};
Rectangle.prototype.toString = function() {
	return "[Rectangle " + this.length + "x" + this.width + "]";
};
//constructors
function Square(size) {
	this.length = size;
	this.width = size;
}
//Square.prototype inherits from Rectangle
Square.prototype = new Rectangle();
Square.prototype.constructor = Square;
Square.prototype.toString = function() {
	return "[Square " + this.length + "x" + this.width + "]";
};
var rect = new Rectangle(5, 10);
var square = new Square(6);
alert(rect.getArea()); // 50
alert(square.getArea()); // 36
alert(rect.toString()); // "[Rectangle 5x10]"
alert(square.toString()); // "[Square 6x6]"
alert(rect instanceof Rectangle); // true
alert(rect instanceof Object); // true
alert(square instanceof Square); // true
alert(square instanceof Rectangle); // true
alert(square instanceof Object); // true
//see 5.2 page 74 for image



//constructors
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
// inherits from Rectangle 
function Square(size) {
  this.length = size;
  this.width = size;
}
//Rectangle.prototype overwrites Square.prototype
Square.prototype = Object.create(Rectangle.prototype, {
//overrides default Rectangle constructor within square
  constructor: {
    configurable: true,
    enumerable: true,
    value: Square,
    writable: true
  }
});
Square.prototype.toString = function() {
	return "[Square " + this.length + "x" + this.width + "]";
};

/****************** Constructor Stealing **************************/

function Rectangle(length, width) {
	this.length = length;
	this.width = width;
}
Rectangle.prototype.getArea = function() {
	return this.length * this.width;
};
Rectangle.prototype.toString = function() {
	return "[Rectangle " + this.length + "x" + this.width + "]";
};
// inherits from Rectangle
function Square(size) {
  Rectangle.call(this, size, size); //Constructor Stealing
  // optional: add new properties or override existing ones here
}
//You can add new properties or override existing ones after applying the super type constructor.
Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Square,
    writable: true
  }
});
Square.prototype.toString = function() {
	return "[Square " + this.length + "x" + this.width + "]";
};
var square = new Square(6);
alert(square.length); // 6
alert(square.width); // 6
alert(square.getArea()); // 36

/****************** Accessing Supertype Methods **************************/
function Rectangle(length, width) {
	this.length = length;
	this.width = width;
}
Rectangle.prototype.getArea = function() {
	return this.length * this.width;
};
Rectangle.prototype.toString = function() {
	return "[Rectangle " + this.length + "x" + this.height + "]";
};
// inherits from Rectangle
function Square(size) {
	Rectangle.call(this, size, size);
}

Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Square,
    writable: true
  }
});
// call the supertype method
//Square.prototype.toString() calls Rectangle.prototype.toString() by using call().
Square.prototype.toString = function() {
	var text = Rectangle.prototype.toString.call(this);
	return text.replace("Rectangle", "Square");
};












