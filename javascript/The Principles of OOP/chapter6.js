/****************** Private and Privileged Members  **************************/
//The Module Pattern
var yourObject = (function() {
		// private data variables
	return {
		// public methods and properties
	};
}());

var person = (function() {
	//immediately invoked function expression (IIFE)
	var age = 25;
	return {
		name: "Nicholas",
		getAge: function() {
			return age;
		},
		growOlder: function() {
			age++;
		}
	};
}());

alert(person.name); // "Nicholas"
alert(person.getAge()); // 25
person.age = 100;
alert(person.getAge()); // 25
person.growOlder();
alert(person.getAge()); // 26

//Revealing module
var person = (function() {
	//IIFE
		var age = 25;
		//Revealing - because it is assigned to return
		function getAge() {
			return age;
		}
		//Revealing - because it is assigned to return
		function growOlder() {
			age++;
		}
	//end IIFE
	return {
		name: "Nicholas",
		getAge: getAge,
		growOlder: growOlder
	};
}());

/****************** Private Members for Constructors **************************/
function Person(name) {
  // define a variable only accessible inside of the Person constructor
  var age = 25;
  this.name = name;
  this.getAge = function() {
  	return age;
  };
  this.growOlder = function() {
  	age++;
  };
}
var person = new Person("Nicholas");
console.log(person.name); // "Nicholas"
console.log(person.getAge()); // 25
person.age = 100;
alert(person.age);
alert(person.getAge()); // 25
person.growOlder();
alert(person.getAge()); // 26

var Person = (function() {
  // everyone shares the same age
  var age = 25;
  function InnerPerson(name) {
  	this.name = name;
  }
  InnerPerson.prototype.getAge = function() {
  	return age;
  };
  InnerPerson.prototype.growOlder = function() {
  	age++;
  };
  return InnerPerson;
}());
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
alert(person1.name); // "Nicholas"
alert(person1.getAge()); // 25
alert(person2.name); // "Greg"
alert(person2.getAge()); // 25
person1.growOlder();
alert(person1.getAge()); // 26
alert(person2.getAge()); // 26

/****************** Mixins **************************/
/*Mixins occur when one object acquires the
properties of another without modifying
the prototype chain */
function mixin(receiver, supplier) {
  for (var property in supplier) {
    if (supplier.hasOwnProperty(property)) {
      receiver[property] = supplier[property]
    }
  }
  return receiver;
}

function EventTarget() {}
EventTarget.prototype = {
    constructor: EventTarget,
    // mixin(receiver, supplier)
    addListener: function(type, listener) {
        // create an array if it doesn't exist
        if (!this.hasOwnProperty("_listeners")) {
            this._listeners = [];
        }
        if (typeof this._listeners[type] == "undefined") {
            this._listeners[type] = [];
        }
        this._listeners[type].push(listener);
    },
    fire: function(event) {
        if (!event.target) {
            event.target = this;
        }
        if (!event.type) { // falsy
            throw new Error("Event object missing 'type' property.");
        }
        if (this._listeners && this._listeners[event.type] instanceof Array) {
            var listeners = this._listeners[event.type];
            for (var i = 0, len = listeners.length; i < len; i++) {
                listeners[i].call(this, event);
            }
        }
    },
    removeListener: function(type, listener) {
        if (this._listeners && this._listeners[type] instanceof Array) {
            var listeners = this._listeners[type];
            for (var i = 0, len = listeners.length; i < len; i++) {
                if (listeners[i] === listener) {
                    listeners.splice(i, 1);
                    break;
                }
            }
        }
    }
};
//Actual usage
var target = new EventTarget();
target.addListener("message", function(event) {
	console.log("Message is " + event.data);
})
target.fire({
  type: "message",
  data: "Hello world!"
});

//When extending an instance, this creates overhead of needing to add a bunch of new properties by hand
var person = new EventTarget();
person.name = "Nicholas";
person.sayName = function() {
	alert(this.name);
	this.fire({ type: "namesaid", name: name });
};


//To solve problem from above(A form of inheritance)
function Person(name) {
    this.name = name;
}
Person.prototype = Object.create(EventTarget.prototype);
Person.prototype.constructor = Person;
Person.prototype.sayName = function() {
    console.log(this.name);
    this.fire({
        type: "namesaid",
        name: name
    });
};
var person = new Person("Nicholas");
alert(person instanceof Person); // true
alert(person instanceof EventTarget); // true




//A more proper way to solve. A form of composition: see page 87 for explanation
function Person(name) {
    this.name = name;
}
mixin(Person.prototype, new EventTarget());
mixin(Person.prototype, {
    constructor: Person,
    sayName: function() {
        console.log(this.name);
        this.fire({
            type: "namesaid",
            name: name
        });
    }
});
var person = new Person("Nicholas");
alert(person instanceof Person); // true
alert(person instanceof EventTarget); // false

/* a new instance of EventTarget is mixed in with some
new properties to create the person object without affecting person’s prototype
chain.*/
var person = mixin(new EventTarget(), {
  name: "Nicholas",
  sayName: function() {
  	alert(this.name);
  	this.fire({ type: "namesaid", name: name });
  }
});



//Be careful of overwriting when using mixin 
var person = mixin(new EventTarget(), {
  get name() {
  	return "Nicholas"
  },
  sayName: function() {
  	alert(this.name);
  	this.fire({ type: "namesaid", name: name });
  }
});
alert(person.name); // "Nicholas"
person.name = "Greg";
alert(person.name); // "Greg"


/* If you want accessor properties to be copied over as accessor properties - This is just another mizin example */
function mixin(receiver, supplier) {
    Object.keys(supplier).forEach(function(property) {
        var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
        Object.defineProperty(receiver, property, descriptor);
    });
    return receiver;
}
var person = mixin(new EventTarget(), {
    get name() {
        return "Nicholas"
    },
    sayName: function() {
        console.log(this.name);
        this.fire({
            type: "namesaid",
            name: name
        });
    }
});
alert(person.name); // "Nicholas"
person.name = "Greg";
alert(person.name); // "Nicholas"


//this version of mixin() works only in ECMAScript 5
function mixin(receiver, supplier) {
    if (Object.getOwnPropertyDescriptor) {
        Object.keys(supplier).forEach(function(property) {
            var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
            Object.defineProperty(receiver, property, descriptor);
        });
    } else {
        for (var property in supplier) {
            if (supplier.hasOwnProperty(property)) {
                receiver[property] = supplier[property]
            }
        }
}

/****************** Scope-Safe Constructors **************************/
function Person(name) {
	this.name = name;
}
Person.prototype.sayName = function() {
	alert(this.name);
};
var person1 = Person("Nicholas"); // note: missing "new"
alert(person1 instanceof Person); // false
alert(typeof person1); // "undefined"
alert(name); // "Nicholas"

function Person(name) {
	if (this instanceof Person) {
		// called with "new"
	} else {
		// called without "new"
}

//scope safe version
function Person(name) {
	if (this instanceof Person) {
		this.name = name;
	} else {
		return new Person(name);
	}
}
var person1 = new Person("Nicholas");
var person2 = Person("Nicholas");
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true





