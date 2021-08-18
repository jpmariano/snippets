<?php
/**
 * 
 * @param type $form
 * @param type $form_state
 * @return string
 */
 /*Create Youtub configuration Form*/
function howard_youtube_system_form($form, &$form_state) {  
  $form['ds_ytchannel_channel_name'] = array(
      '#type' => 'textfield',
      '#title' => t('Channel username'),
      '#description' => t('The username in the url. es. https://www.youtube.com/user/<strong>MYUSERNAME</strong>'),
      '#default_value' => t('howarduniversity'),
      '#size' => 20,
      '#required' => TRUE
  );
  
  $form['submit'] = array (
      '#type' => 'submit',
      '#value' => t('Save')
  );
  
  return $form;
}

/**
 * hook_FORM_save()
 * @param type $form
 * @param type $form_state
 */

function howard_youtube_system_form_submit($form, &$form_state) {
	drupal_set_message(t('YouTube channel name saved'));
  //variable_set('ds_ytchannel_channel_name', $form_state['values']['ds_ytchannel_channel_name']);//set variable youtube channel name
}

/*
* Implement hook_form_alter().
*/
function howard_youtube_system_form_alter(&$form, &$form_state, $form_id) {
  $form['values']['ds_ytchannel_channel_name '] = $ds_ytchannel_channel_name;
}
