function VehicleFactory() {}

VehicleFactory.prototype.vehicleClass = Car;

	VehicleFactory.prototype.getVehicle = function (options) {
		return new this.vehicleClass(options);
	};
	
	var carFactory = new VehicleFactory();
	
		var car = carFactory.getVehicle({ color: "yellow", turbo: true });
		console.log(car instanceof Car); // => true
		// approach #1: Modify a VehicleFactory instance to use the Truck class

	carFactory.vehicleClass = Truck;

		var mover = carFactory.getVehicle({ enclosedCargo: true, length: 26 });
		counsole.log(mover instanceof Truck); // => true
		// approach #2: Subclass VehicleFactory to create a factory class that
		// builds Trucks

function TruckFactory () {}

	TruckFactory.prototype = new VehicleFactory();
	TruckFactory.prototype.vehicleClass = Truck;
	
	var truckFactory = new TruckFactory();
	var bigfoot = truckFactory.getVehicle({ monster: true, cylinders: 12 });
	console.log(bigfoot instanceof Truck); // => true
	
/*************************************/
var peopleFactory = function(name, age, state){
	var temp = {};
	
	temp.age = age;
	temp.name = name;
	temp.state = state;
	temp.printPerson = function(){
		console.log(this.name + ", " + this.age + ", " + this.state);
	}
	
	return temp;
}

var person1 = peopleFactory("john", 23, "CA");
var person2 = peopleFactory("kim", 27, "SC");

person1.printPerson();
person2.printPerson();

/*****************/
//Simple Factory Pattern
var RedCircle = function(){
		this.item = $('<div class="circle"></div>');
	},
	BlueCircle = function(){
		this.item = $('<div class="circle" style="background:blue"></div>');
	}, CircleFactory = function(){
			this.create = function(color){
				if(color === 'blue') {
					return new BlueCircle();
				}else{
					return new RedCircle();
				}
			}
	};

var cf = new CircleFactory();
cf.create('blue').item;


/*****************/
//Abstract Factory Pattern
// Polyfill -- Only necessary for browsers which don't support Object.create. Check this ES5 compatibility table:
// http://kangax.github.com/es5-compat-table/
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation only accepts the first parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}


// Credit to Yehuda Katz for `fromPrototype` function
// http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/
var fromPrototype = function(prototype, object) {
    var newObject = Object.create(prototype);
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            newObject[prop] = object[prop];
        }
    }
  return newObject;
};


// Define our `Ingredients` base object
//This is the Abstract Factory
var pageElements = {
    header: function() {
        return '<header></header>';
    },
    body: function() {
        return '<content></content>';
    },
    footer: function() {
        return '<footer></footer>';
    }
};

// Extend `Ingredients` with concrete implementations
pageElements.template1 = function() {
    return fromPrototype(pageElements, {
        header: function() {
            return '<header><h1>template 1</h1></header>';
        },
        body: function() {
            return '<content><p>template body 1</p></content>';
        },
        footer: function() {
            return '<footer><p>template footer 1</p></footer>';
        }
    });
};

pageElements.template2 = function() {
    return fromPrototype(pageElements, {
        header: function() {
            return '<header><h1>template 2</h1></header>';
        },
        body: function() {
            return  '<content><p>template body 2</p></content>';
        },
        footer: function() {
            return '<footer><p>template footer 2</p></footer>';
        }
    });
};

// Try it out!
var mypage = pageElements.template1();
alert(mypage.header());