//States of form array: Caller
'#states' => array(
	'checked' => array(
		'input[name="title"]' => array('filled' => TRUE),
	),
)

//Listener state
'#states' => array(
	$listener_state => array(
		$jquery_selector_for_the_caller => array($caller_state_change => $caller_state_value),
	),
)
