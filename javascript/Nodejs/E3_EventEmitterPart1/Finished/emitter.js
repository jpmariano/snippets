//Step 1: Create a function constructor
function Emitter() {
	this.events = {
		//prop:[listener, listener];
		//eventtype: [listener, listener];
		//onfilesave: [function(){), function(){)];
	};
}
//Step 2: add a method/fuction called on(https://nodejs.org/api/events.html); The function takes an input type of event, and event listener/callback
Emitter.prototype.on = function(type, listener) {
	this.events[type] = this.events[type] || []; //This checks if property event type exist in line 4
	this.events[type].push(listener); //onfilesave: [function(){), function(){)];
}
//Step 3: Emitter (hey something happen)
Emitter.prototype.emit = function(type) {
	if (this.events[type]) {
		this.events[type].forEach(function(listener) { //look for the events types if exist
			listener(); //invoke each listener of that event
		});
	}
}
//Step 4: Make it available
module.exports = Emitter;