var obj = {
	name: 'John Doe',
	greet: function() {
		console.log(`Hello ${ this.name }`);
	}
}

obj.greet();
obj.greet.call({ name: 'Jane Doe'}); //overrides the this.name property call({ name: 'Jane Doe'}, param,param) 
obj.greet.apply({ name: 'Jane Doe'}); //overrides the this.name property all({ name: 'Jane Doe'}, [param,param])  