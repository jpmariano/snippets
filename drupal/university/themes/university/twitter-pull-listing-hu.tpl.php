<?php

/**
 * @file
 * Theme template for a list of tweets.
 *
 * Available variables in the theme include:
 *
 * 1) An array of $tweets, where each tweet object has:
 *   $tweet->id
 *   $tweet->username
 *   $tweet->userphoto
 *   $tweet->text
 *   $tweet->timestamp
 *   $tweet->time_ago
 *
 * 2) $twitkey string containing initial keyword.
 *
 * 3) $title
 *
 
 #JPs - 1.15.15 - Moved this to howard.module file because Acquia does not want DB queries placed in the theme code. 
 $result = db_select('twitter_account', 't')
    ->fields('t',array('screen_name'))	
    ->execute()
    ->fetchField(); 
 
 */
 
 $result = twitter_account_name();
 
?>
<?php if ($lazy_load): ?>
  <?php print $lazy_load; ?>
<?php else: ?>
<?php $themepath = base_path() . path_to_theme(); ?>
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-6">
 <div class="social_details twitter">
 <div class="heading">
                           <i class="fa fa-twitter"></i>
                           
            <?php if (!empty($title)): ?>
              <p><a href="https://twitter.com/<?php print $result ?>" target="_blank"><?php print $title; ?></a></p>
     
  <?php endif; ?>
                        </div>
  <?php if (is_array($tweets)): ?>
    <?php $tweet_count = count($tweets); ?>
    <?php foreach ($tweets as $tweet_key => $tweet): ?>
    
      	 <div class="twitter_det"><span class = "title"><?php print l( $tweet->username, 'https://twitter.com/' . $tweet->screenname); ?></span> @<?php print $tweet->screenname; ?>
      	 	 <?php print twitter_pull_add_links($tweet->text); ?> </div>
       <?php endforeach; ?>
   
  <?php endif; ?>
</div>
</div>
<?php endif; ?>
