var myRevealingModule = (function(){
	var name = 'John Smith';
	var age = 40;
	
	function updatePerson(){
		name = 'John Smith Updated';
	}
	
	function setPerson () {
		name = 'John Smith Set';
	}
	
	function getPerson () {
		return name;
	}
	
	return {
		set: setPerson,
		//get which is public accesses getPerson which is private
		get: getPerson
	};

});
// Sample usage:
myRevealingModule.get();