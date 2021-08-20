<?php

add_filter( 'genesis_after_post_title', 'tvpremium_custom_sharethis' );
function tvpremium_custom_sharethis( $args ) {
	if ( ! is_front_page() && !is_page( 'thank-you' ) && !is_singular( 'donations' ) ) {
		if (function_exists('sharethis_button')) { ?>
    <div id="sharethis" class="clearfix">
      <div class="sharethis_wrap">
	<span class="share-label">SHARE</span>
        <span class='st_facebook_hcount' st_title='<?php the_title(); ?>' st_url='<?php the_permalink(); ?>' displayText='facebook'></span><span st_via='GregAbbott_TX' st_username='GregAbbott_TX' class='st_twitter_hcount' st_title='<?php the_title(); ?>' st_url='<?php the_permalink(); ?>' displayText='twitter'></span> 
        <?php sharethis_button(); ?>
      </div>
    </div>
    <?php }
		}
}