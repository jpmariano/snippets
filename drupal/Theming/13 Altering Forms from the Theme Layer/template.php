<?php
//&$form - form Elements, $form_state contains processing information, $form_id - is the form's unique id
function hook_form_alter(&$form, &$form_state, $form_id){
	//dsm($form_id);
	if($form_id == 'search_block_form'){
		//dsm($form);
		//check drupal form api for type image_button
		$form['actions']['submit']['#type'] = 'image_button';
		$form['actions']['submit']['#type'] = drupal_get_path('theme', 'yourthemename') . '/images/search.png';
		//adding class
		$form['actions']['submit']['#attributes']['class'][] = 'btn';
	}
};
