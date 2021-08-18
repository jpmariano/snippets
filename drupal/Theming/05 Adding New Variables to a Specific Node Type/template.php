<?php

	//To see all node variables
 function ninesixtyrobots_preprocess_node(&$variables) {
		  //	kpr($variables); - to see what variables avaiblabe for node
 }
	 
	 
	 
//to see all node articles variables
 function ninesixtyrobots_preprocess_node(&$variables) {
		 if($variables['type'] == 'article') {
			$node = $variables['node'];
			//kpr($node); 
			}
 }
 
 
 
 	//to see all node articles variables; node.tpl.php
 function ninesixtyrobots_preprocess_node(&$variables) {
		 if($variables['type'] == 'article') {
				$node = $variables['node'];
			  //format_date -  check drupal's api
			  $variables ['submitted_day'] = format_date($node->created, 'custom', j);
			  $variables ['submitted_month'] = format_date($node->created, 'custom', M);
			  $variables ['$submitted_year'] = format_date($node->created, 'custom', Y);
			}
 }
 
 
	 
	//adding new variable (this is a variation from above)
 function ninesixtyrobots_preprocess_page(&$variables, $hook) {
				
				if($variables['type'] == 'article') {
					$node = $variables['node'];
					
					//kpr($node); 
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