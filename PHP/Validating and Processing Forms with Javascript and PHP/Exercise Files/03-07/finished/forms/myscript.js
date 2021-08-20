var inputFields = document.theform.getElementsByTagName("input");

for (key in inputFields) {

	var myField = inputFields[key];
	var myError = document.getElementById('formerror');

	myField.onchange = function() {
		var myPattern = this.pattern;
		var myPlaceholder = this.placeholder;
		var isValid = this.value.search(myPattern) >= 0;

		if (!(isValid)) {
			myError.innerHTML = "Input does not match expected pattern. " + myPlaceholder;
		} else { //pattern not valid
			myError.innerHTML = "";
		} //pattern is valid

	} // myField has changed



} // inputFields