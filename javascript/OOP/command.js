(function(){
	var CarManager = {
		// request information
		requestInfo: function( model, id ){
			return 'The information for ' + model +
			' with ID ' + id + ' is foobar';
		},
		// purchase the car
		buyVehicle: function( model, id ){
			return 'You have successfully purchased Item '
			+ id + ', a ' + model;
		},
		// arrange a viewing
		arrangeViewing: function( model, id ){
			return 'You have successfully booked a viewing of '
			+ model + ' ( ' + id + ' ) ';
		}
	};
});

//executing commands
CarManager.execute = function (name) {
	return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
};



//issuing commands 
CarManager.execute("buyVehicle", "Ford Escort", "453543");
CarManager.execute("arrangeViewing", "Ferrari", "14523");
CarManager.execute("requestInfo", "Ford Mondeo", "54323");
CarManager.execute("requestInfo", "Ford Escort", "34232");
CarManager.execute("buyVehicle", "Ford Escort", "34232");
