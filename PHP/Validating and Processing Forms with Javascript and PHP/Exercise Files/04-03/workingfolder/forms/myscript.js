$(document).ready(function() {
	$('#myform').submit(function() {
		var abort = false;
		$("div.error").remove();
		$(':input[required]').each(function() {
			if ($(this).val()==='') {
				$(this).after('<div class="error">This is a required field</div>');
				abort = true;
			}
		}); // go through each required value
		if (abort) { return false; } else { return true; }
	})//on submit
}); // ready