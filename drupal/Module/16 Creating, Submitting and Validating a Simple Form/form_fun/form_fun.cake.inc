<?php

//Step 1: Create a Unique ID of the Form
function form_fun_cake_page() {
	//must be unique id of the form
  return drupal_get_form('form_fun_cake');
}

//Step 2: Create a form; 
function form_fun_cake($form, &$form_state) {
  $form = array();
  //https://api.drupal.org/api/drupal/developer!topics!forms_api_reference.html/7 
  $form['choice'] = array(
    '#type' => 'select',
    '#title' => t('Cake or pie?'),
    '#description' => t('Would you like cake or pie?'),
    '#options' => array(
      //'value' => t('label')
      'cake' => t('Cake please'),
      'pie' => t('Pie I guess'),
    ),
    '#default_value' => 'cake',
    '#required' => TRUE,
  );

  $form['buttons']['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Submit'),
  );
  $form['buttons']['unsure'] = array(
    '#type' => 'submit',
    '#value' => t('Equivocate'),
    //'#submit' => array('function to call'),
    '#submit' => array('form_fun_cake_unsure'),
    '#validate' => array(),
  );

  return $form;
}
//&$form -  the actual form, &$form_state - values and processing of the forms
function form_fun_cake_validate(&$form, &$form_state) {
  if ($form_state['values']['choice'] == 'cake') {
  	//form_set_error('element', t('message')); It re-displays the form with error message
    form_set_error('choice', t('We are out of cake.'));
  }
}

//hook_submit - processed the form and form's data
function form_fun_cake_submit(&$form, &$form_state) {
  dsm($form_state['values']);
	//$form_state['redirect'] = 'url';
  $form_state['redirect'] = '';
}

function form_fun_cake_unsure(&$form, &$form_state) {
  drupal_set_message(t('Make up your mind.'), 'warning');
}


