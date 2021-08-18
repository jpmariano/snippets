(function($) {
$(document).ready(function() {
	$('#search input.form-text').autofill({
		//In console type: Drupal and then inspect
		//In FF, just click on dom
		value: Drupal.t('Search...'),
	});
});
}(jQuery))