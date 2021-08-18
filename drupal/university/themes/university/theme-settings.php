<?php
/**
 * Implements hook_form_system_theme_settings_alter().
 *
 * @param $form
 *   Nested array of form elements that comprise the form.
 * @param $form_state
 *   A keyed array containing the current state of the form.
 */
function howard_form_system_theme_settings_alter(&$form, &$form_state, $form_id = NULL)  {
  // Work-around for a core bug affecting admin themes. See issue #943212.
  $form['logo']['settings']['sublogo'] = array(
    '#type' => 'fieldset',
    '#title' => t('Footer Logo'),
    '#description' => t("The path to the file you would like to use as your footer logo")
  );
    $logo_path = theme_get_setting('sublogo_path');
    // If $logo_path is a public:// URI, display the path relative to the files
    // directory; stream wrappers are not end-user friendly.
    if (file_uri_scheme($logo_path) == 'public') {
      $logo_path = file_uri_target($logo_path);
    }
  $form['logo']['settings']['sublogo']['sublogo_path'] = array(
    '#type' => 'hidden',
    '#title' => t('Path to footer logo '),
    '#default_value' =>  $logo_path,
  );
  $form['logo']['settings']['sublogo']['sublogo_upload'] = array(
    '#type' => 'file',
    '#title' => t('Upload footer logo'),
  );
  // We are editing the $form in place, so we don't need to return anything.
  $form['#submit'][]   = 'howard_settings_submit';

  // Create the form using Forms API: http://api.drupal.org/api/7

  /* -- Delete this line if you want to use this setting
  $form['STARTERKIT_example'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('STARTERKIT sample setting'),
    '#default_value' => theme_get_setting('STARTERKIT_example'),
    '#description'   => t("This option doesn't do anything; it's just an example."),
  );
  // */

  // Remove some of the base theme's settings.
  unset($form['themedev']['zen_layout']); // We don't need to select the layout stylesheet.

  // We are editing the $form in place, so we don't need to return anything.
}
function howard_settings_submit($form, &$form_state) {
  $settings = array();
  // Check for a new uploaded file, and use that if available.
  if ($file = file_save_upload('sublogo_upload')) {
    $parts = pathinfo($file->filename);
    $destination = 'public://' . $parts['basename'];
    $file->status = FILE_STATUS_PERMANENT;
     if (file_copy($file, $destination, FILE_EXISTS_REPLACE)) {
        $_POST['sublogo_path'] = $form_state['values']['sublogo_path'] = $destination;
     }
  }
}