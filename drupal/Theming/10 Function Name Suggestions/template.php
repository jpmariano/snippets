<?php


	//field--body--article.tpl.php
	THEMENAME_field__body__article();
	
	//field--article.tpl.php
	THEMENAME_field__article();
	
	//field--body.tpl.php
	THEMENAME_field__body();
	
	//field.tpl.php
	THEMENAME_field(); 



function YOURTHEME_field__field_tags($variables) {
  $output = '';
  
	//kpr($variables);
 //Add a links variable
 $links = array();      //$delta - items positions;
 foreach($variables['items'] as $delta => $item) {
 	//+= means merge the array into $item['options']['attributes'] 
 	 $item['options']['attributes'] += $variables['item_attributes_array'][$delta];
 	 $links[] = drupal_render($item);
 }
 
 $output .= implode(', ' , $links);

  return $output;
}
