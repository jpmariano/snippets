<?php

//&$form - form Elements, $form_state contains processing information, $form_id - is the form's unique id
function hook_form_alter(&$form, &$form_state, $form_id){
	//debug($form_id); - to find form id
}
//try not to use behavioral changes 
function hook_form_user_login_alter(&$form, &$form_state){
	//debug($form_id); - prints form array
	$form['name']['#title'] = t('Name');
};

//try not to use behavioral changes 
function hook_form_user_register_form_alter(&$form, &$form_state){
	//debug($form); - prints form array
	$form['account']['name']['#required'] = FALSE;
};