<?php
/**
 * Implements hook_form_FORM_ID_alter()
 */
 
 function hook_form_system_theme_settings_alter(&$form, $form_state){
 	//kpr($form);
 	
	//Add fields to existing form
	
	$form['breadcrumb_delimiter'] = array(
	  '#type' => 'textfield',
		'#title' => t('Breadcrumb Delimter'),
		'#size' => 4,
		//theme_get_setting grabs an input value if there is one if not, it will grab from the .info file
		'#default_value' => theme_get_setting('breadcrumb_delimiter'),
		);
		
	$form['use_twitter'] = array(
	  '#type' => 'checkbox',
		'#title' => t('Use Twitter for site slogan'),
		'#default_value' => theme_get_setting('use_twitter'),
		);
		
	$form['twitter_search_term'] = array(
	  '#type' => 'textfield',
		'#title' => t('Twitter Search Form'),
		'#default_value' => theme_get_setting('twitter_search_term'),
		);
 }

//includes/theme.inc, line 1409
//function theme_get_setting($setting_name, $theme = NULL ){}
