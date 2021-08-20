var myField = document.theform.mytelephone;
var myError = document.getElementById('formerror');

myField.onchange = function() {
	var myPattern = new RegExp("\\d{3}[\\-]\\d{3}[\\-]\\d{4}", "i");
	var isValid = this.value.search(myPattern) >= 0;

	if (!(isValid)) {
		myError.innerHTML = "Input does not match expected pattern. xxx-xxx-xxxx";
	} else { //pattern not valid
		myError.innerHTML = "";
	} //pattern is valid

} // myField has changed
