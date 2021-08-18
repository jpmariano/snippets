<?php

	//adding new variable
 function ninesixtyrobots_preprocess_page(&$variables, $hook) {
			//$variables['new_variable'] = t('your message');
			$variables['footer_message'] = t('your message');
 }
	 
	 
	//adding new variable (this is a variation from above)
 function ninesixtyrobots_preprocess_page(&$variables, $hook) {
				
			if($variables['logged_in']) {
				$variables['footer_message'] = t('your login');
			}
			else {
					$variables['footer_message'] = t('your logout');
			}
 }
 
 //adding new variable (this is a variation from above)
 function ninesixtyrobots_preprocess_page(&$variables, $hook) {
				
			if($variables['logged_in']) {
				$variables['footer_message'] = t('your login', array('@username' => $variables['user']->name));
			}
			else {
					$variables['footer_message'] = t('your logout');
			}
 }