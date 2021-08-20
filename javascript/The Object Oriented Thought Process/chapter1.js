
function person(name, age, address) {
	this.name = name;
	this.age = age;
	this.address = address;
	//adding shared external methods
	this.yearsLeft = yearsLeft;
	this.toString = function () {
		return this.name + "is " + age + " yearsold and has address of  " + this.address;
	};
}

function yearsLeft(){
	var numYears = 65 - this.age;
	return numYears;
}

//setting properties
var jake = new person('jake', 34,  '55 michigan ave NE, Washington D.C.');
//adding variable to extend 
jake.job = "programmer";

//adding methods to extend 

jake.isEmployed = function() {
	if (typeof this.job == 'undefined'){
		return "not employed";
	} else {
		return "employed";
	}
}



//getting properties
alert(jake.name);
alert(jake.age);
alert(jake.address);
alert(jake.job);
alert(jake.yearsLeft());

//getting methods
alert(jake.toString());
alert(jake.isEmployed());

var molly = new person('molly', 21,  '100 michigan ave NW, Washington D.C.');
molly.isEmployed = function() {
	if (typeof this.job == 'undefined'){
		return "not employed";
	} else {
		return "employed";
	}
}
alert(molly.name);
alert(molly.age);
alert(molly.address);
alert(molly.job);
alert(molly.toString());
alert(molly.yearsLeft());
alert(molly.isEmployed());
