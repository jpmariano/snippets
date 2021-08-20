var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	this.greeting = 'Hello world!';
}

//inherits (equals to extends in ES6) - Greetr will now inherit EventEmitter
util.inherits(Greetr, EventEmitter);
//Greetr have access to greet 
Greetr.prototype.greet = function(data) {  //2
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);//3 because of inherits(Greetr, EventEmitter), Greetr can call the greet event 
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) { //4
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony'); //1