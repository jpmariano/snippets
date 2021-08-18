<?php


 
 	//to see all node articles variables; node.tpl.php
 function ninesixtyrobots_preprocess_node(&$variables) {
		 if($variables['type'] == 'article') {
				$node = $variables['node'];
			  //format_date -  check drupal's api
			  $variables ['submitted_day'] = format_date($node->created, 'custom', j);
			  $variables ['submitted_month'] = format_date($node->created, 'custom', M);
			  $variables ['$submitted_year'] = format_date($node->created, 'custom', Y);
			}
		 
		  if($variables['type'] == 'page') {
		  	//kpr($variables); 
		  	$today = strtolower(date('l'));
				//$variables ['theme_hook_suggestions'][] = 'node__wednesday';
				$variables ['theme_hook_suggestions'][] = 'node__' . $today;
				//kpr($variables); 
				$variables ['day_of_the_week'] =  $today;
			}
 }
 
 
 
	