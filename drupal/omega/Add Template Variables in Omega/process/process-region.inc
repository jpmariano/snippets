<?php

/**
 * Processing for the region Templates
 */
 
 function youromegasubtheme_omega_alpha_process_region(&$vars){
 		//custom functionality here Copy from omega's template.php into here
 		$theme = alpha_get_theme();
		//Variables for the branding region ( You do this when errors shows that the variables are undefined during the page.tpl.php conversion)
		$vars['main_menu'] = $theme->page['main_menu'];
		$vars['front_page'] = $theme->page['front_page'];
 }

  //Copied from template.php to here
  //Check if the is using Twitter
  $use_twitter = theme_get_setting('use_twitter');
	  if ($cache = cache_get('ninesixtyrobots_omega_tweets')) {
	  	 $data = $cache->data;
	  } 
		else {
			$query = theme_get_setting('twitter_search_term');
			$query = drupal_encode_path($query);
			
			$response = drupal_http_request('http://search.twitter.com/search.json' . $query);
			
			if ($response->code == 200 ){
				$data = json_decode($response->data);
				//Set a 5 minute cache on retrieving tweets
				//Note if this isn't updqting on your site "run cron"
			  cache_set('ninesixtyrobots_omega_tweets', $data, 'cache', 300);
			}
		}
		$tweet = $data->results[array_rand($data->results)];
		//create the actual variable finally
		$variables['site_slogan'] = check_plain(html_entity-decode($tweet->text));
		
		//add new variables to page.tpl.php
		if ($variables['logged_in']){
			$variables['footer_message'] = t('welcome @username, lullabot loves you.', array('@username' => $variables['user']->name));
		}

