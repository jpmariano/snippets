<?php
 
 
 	//to see all node articles variables
 function ninesixtyrobots_preprocess_node(&$variables) {
		 if($variables['is_front'] == TRUE) {
		 	// drupal_add_css read the drupal api; CSS_THEME is equals to 100; weight is optional
		   drupal_add_css(path_to_theme() . '/css/front.css', array ('group' => CSS_THEME, 'weight' => -10));
			}
 }
 
 
