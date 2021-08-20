/****************** Defining Properties **************************/
var person1 = {
	name: "Nicholas"  //- It uses intenal js put method
};
var person2 = new Object();
person2.name = "Nicholas"; //- It uses intenal js put method

person1.age = "Redacted";//- It uses intenal js put method
person2.age = "Redacted";//- It uses intenal js put method
person1.name = "Greg";//overrides person1.name = "Nicholas"; - It uses intenal js set method
//overrides person2.name = "Nicholas"; - It uses intenal js set method
person2.name = "Michael";

//Detecting Properties ; in checks all properties including prototype; hasOwnProperty checks only declared properties
alert("name" in person1); // true
alert("age" in person1); // true
alert("title" in person1); // false
alert(person1.hasOwnProperty("name"));//true
alert("toString" in person1); // true -- toString() method, however, is a prototype property that is present on all objects
alert(person1.hasOwnProperty("toString")); // false


/****************** Removing Properties **************************/
var person1 = {
	name: "Nicholas"
};
alert("name" in person1); // true
delete person1.name; // true - not output
alert("name" in person1); // false
alert(person1.name); // undefined

/****************** Enumeration **************************/
//Pulling out Property name, and Value of an object
var person1 = { name: "Nicholas" };
for (name in person1){
  alert("Property Name: " + name); //Property Name: name
  alert("Value: " + person1['name']);//Value: Nicholas
}

//Looping through an object to pull out Property Name and Value
var person1 = { name: "Nicholas", age: 23 };
var properties = Object.keys(person1);
// if you want to mimic for-in behavior
var i, len;

for (i=0, len=properties.length; i < len; i++){
	alert("Property Name: " + properties[i]); //Property Name: name, //Property Name: age
	alert("Value: " + person1[properties[i]]);//Value: Nicholas, Value: 23
}



//propertyIsEnumerable - to check whether a property is enumerable
var person1 = { name: "Nicholas" };
alert("name" in person1); // true
alert(person1.propertyIsEnumerable("name")); // true  
var properties = Object.keys(person1);
alert("length" in properties); // true
alert(properties.propertyIsEnumerable("length")); // false

/****************** Data Properties  **************************/

var person1 = {
 	_name: "Nicholas", //Data properties 
 	get name() { //Accessor properties
		alert("Reading name");
		return this._name;
	},
   set name(value) { //Accessor properties
		alert("Setting name to " + value);
		this._name = value;
	}
};

alert(person1.name);// "Reading name" then "Nicholas" 
person1.name = "Greg"; // "Setting name to Greg"
alert(person1.name); // "Reading name" then "greg"

/****************** Property Attributes  **************************/
/*
 Common Attributes between Data Properties and Accessor Properties
 	Enumerable which determines whether you can iterate over the property
 	Configurable which determines whether the property can be changed
*/
var person1 = { name: "Nicholas" };
	Object.defineProperty(person1, "name", { enumerable: false }); // defineProperty to change property attributes Enumerable, and Configurable attributes
	alert("name" in person1); // true
	alert(person1.propertyIsEnumerable("name")); // false
var properties = Object.keys(person1);
	alert(properties.length); // 0
	Object.defineProperty(person1, "name", { configurable: false });
	
// try to delete the Property
delete person1.name; //You can't delete the propety because you configure it to false
alert("name" in person1); // true
alert(person1.name); // "Nicholas"
Object.defineProperty(person1, "name", { configurable: true }); //error!!! you can’t make a nonconfigurable property configurable again


//Data Properties Attributes: value, writable
/*
	When you are defining a new property with Object.defineProperty(),
	it’s important to specify all of the attributes because Boolean attributes
	automatically default to false otherwise.
*/
var person1 = {};
Object.defineProperty(person1, "name", {
	value: "Nicholas",
	enumerable: true,
	configurable: true,
	writable: true
});

var person1 = {};
Object.defineProperty(person1, "name", {
	value: "Nicholas"
});
alert("name" in person1); // true
alert(person1.propertyIsEnumerable("name")); // false 
delete person1.name;
alert("name" in person1); // true
person1.name = "Greg";
alert(person1.name); // "Nicholas"

//Accessor Properties Attributes: get, set
//accessor property attributes
var person1 = {
  _name: "Nicholas",
  get name() {
    alert("Reading name");
    return this._name;
  },
  set name(value) {
    alert("Setting name to " + value);
    this._name = value;
  }
};
//object literal notation (same as above): Disadvantage you have to define enumerable or configurable
var person1 = { _name: "Nicholas" };
Object.defineProperty(person1, "name", {
  get: function() {
    alert("Reading name");
    return this._name;
  },
  set: function(value) {
  	alert("Setting name to " + value);
  	this._name = value;
  },
  enumerable: true,
  configurable: true
});

//object literal notation 
var person1 = {
	_name: "Nicholas"
};

Object.defineProperty(person1, "name", {
  get: function() {
  alert("Reading name");
  return this._name;
  }
});
alert("name" in person1); // true
alert(person1.propertyIsEnumerable("name")); // false because enumerable is not defined. The default is false
delete person1.name;
alert("name" in person1); // true
person1.name = "Greg";
alert(person1.name); // "Nicholas"

/****************** Defining Multiple Properties  **************************/
//You can define any number of properties using Object.defineProperties();
var person1 = {};
Object.defineProperties(person1, {
  // data property to store data
  _name: {
    value: "Nicholas",
    enumerable: true,
    configurable: true,
    writable: true
  },
  // accessor property
  name: {
    get: function() {
      alert("Reading name");
      return this._name;
    },
    set: function(value) {
      alert("Setting name to" + value);
      this._name = value;
    },
    enumerable: true,
    configurable: true
  }
});

/****************** Retrieving Property Attributes  **************************/
var person1 = { name: "Nicholas" };
var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
alert(descriptor.enumerable); // true
alert(descriptor.configurable); // true
alert(descriptor.writable); // true
alert(descriptor.value); // "Nicholas"

/****************** Preventing Object Modification  **************************/
//Preventing Extensions
var person1 = { name: "Nicholas" };
alert(Object.isExtensible(person1)); // true
Object.preventExtensions(person1);
alert(Object.isExtensible(person1)); // false
person1.sayName = function() {
	alert(this.name);
};
alert("sayName" in person1); //false

//Sealing Objects - A sealed object is nonextensible, and all of its properties are nonconfigurable
var person1 = { name: "Nicholas" };
alert(Object.isExtensible(person1)); // true
alert(Object.isSealed(person1)); // false
Object.seal(person1);
alert(Object.isExtensible(person1)); // false
alert(Object.isSealed(person1)); // true
person1.sayName = function() {
	alert(this.name);
};
alert("sayName" in person1); // false
person1.name = "Greg";
alert(person1.name); // "Greg"
delete person1.name;
alert("name" in person1); // true
alert(person1.name); // "Greg"
var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
alert(descriptor.configurable); // false

//Freezing Extensions (makes the object read only)
var person1 = {
	name: "Nicholas"
};
alert(Object.isExtensible(person1)); // true
alert(Object.isSealed(person1)); // false
alert(Object.isFrozen(person1)); // false

Object.freeze(person1);
alert(Object.isExtensible(person1)); // false
alert(Object.isSealed(person1)); // true
alert(Object.isFrozen(person1)); // true

person1.sayName = function() {
	alert(this.name);
};
alert("sayName" in person1); // false

person1.name = "Greg";
alert(person1.name); // "Nicholas"

delete person1.name;
alert("name" in person1); // true
alert(person1.name); // "Nicholas"

var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
alert(descriptor.configurable); // false
alert(descriptor.writable); // false

















