<?php

/**
 * preprocess function for page.tpl.php
 */

 //to see all hooks that run
 function ninesixtyrobots_preprocess(&$variables, $hook) {
 		kpr($hook);
 }

//To see all hooks that run in their order
 function ninesixtyrobots_preprocess(&$variables, $hook) {
 		static $i;
		kpr($i . '' . $hook);
		$i++;
 }
 
 //To see specific hook
 function ninesixtyrobots_preprocess(&$variables, $hook) {
		if ($hook == 'page') {
			static $i;
			kpr($i . '' . $hook);
			$i++;
		}
 }
 
  //This is the same as the top
 function ninesixtyrobots_preprocess_page(&$variables, $hook) {
			static $i;
			kpr($i . '' . $hook);
			$i++;
 }
 
   //This shows the page's variables
 function ninesixtyrobots_preprocess_page(&$variables, $hook) {
			kpr($variables);
 }
 
  function ninesixtyrobots_preprocess_page(&$variables, $hook) {
			$variables['site_slogan'] = 'my new slogan';
 }
	
	 function ninesixtyrobots_preprocess_page(&$variables, $hook) {
			$slogans = array(
			t('life is good.'),
			t('life is best.'),
			t('life is better.'),
			t('life is uncomparable.'),
			t('life is relaxing.'),
			);
			
			$slogan = $slogans[array_rand($slogans)];
			
			$variables['site_slogan'] = $slogan;
 }
	 
	 
	 