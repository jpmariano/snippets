<?php

/*
 * Sytems settings form for blacklisting passwords
 */
function demo_passwords_form($form, &$form_state) {
  //demo_badpasswords - modulename_fieldname
  $form['demo_badpasswords'] = array(
    '#type' => 'textfield',
    '#title' => t('Bad Passwords'),
    //check the variables table inside the database for demo_badpasswords field and the values
    '#default_value' => variable_get('demo_badpasswords'),
    '#description' => t('Enter a list of "bad passwords" separated by commas.  If a user tries to enter one of these passwords either on account creation or when editing their account, the form will display an error message.'),
  );
  //system_settings_form -  will add this to admin/config/; Automatically does validation, and submit button
  return(system_settings_form($form));

}