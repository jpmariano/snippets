<?php
/* Keep the same function hook along with your theme name; do any changes within the function; */
function YOURTHEME_breadcrumb($variables) {
  $breadcrumb = $variables['breadcrumb'];

  if (!empty($breadcrumb)) {
     $output = '<h2 class="element-invisible">' . t('You are here' ) . '</h2>';
		 $delimiter = theme_get_setting('breadcrumb_delimiter'); 
		 
		 $title = drupal_get_title();
		 $output .= '<div class="breadcrumb">' . implode($delimiter, $breadcrumb) . $delimiter . $title . '</div>';
		 
		 return  $output;
		 }
}

function ninesixtyrobots_preprocess_page(&$variables, $hook) {
  //Check if the is using Twitter
  $use_twitter = theme_get_setting('use_twitter');
	  if ($cache = cache_get('ninesixtyrobots_tweets')) {
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
			  cache_set('ninesixtyrobots_tweets', $data, 'cache', 300);
			}
		}
		$tweet = $data->results[array_rand($data->results)];
		//create the actual variable finally
		$variables['site_slogan'] = check_plain(html_entity-decode($tweet->text));
		
		//add new variables to page.tpl.php
		if ($variables['logged_in']){
			$variables['footer_message'] = t('welcome @username, lullabot loves you.', array('@username' => $variables['user']->name));
		}

 }
	 
	 