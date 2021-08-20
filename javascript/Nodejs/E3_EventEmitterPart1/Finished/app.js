//Step 5: create the obj
var Emitter = require('./emitter');

var emtr = new Emitter(); //Step 6: call the function constructor

//Step 7: add event/property name and the listener function 
emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.');
});
//Step 7: add event/property name and another listener function 
emtr.on('greet', function() {
	console.log('A greeting occurred!');
});

console.log('Hello!');
//Step 8: when greet event is called, it will invoke all listener
emtr.emit('greet');