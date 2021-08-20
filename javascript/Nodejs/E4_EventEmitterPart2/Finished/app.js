var Emitter = require('events');
//Step 2:
var eventConfig = require('./config').events;

var emtr = new Emitter();
//Step 3: eventConfig.GREET (now your IDE, can detect the string)
emtr.on(eventConfig.GREET, function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
	console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);