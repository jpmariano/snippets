<?php
add_action( 'genesis_before_post', 'humphrey_remove_elements' );

function humphrey_remove_elements() {
  
	if ( ! current_theme_supports( 'post-formats' ) )
		return;

	// Remove if post has format
	if ( get_post_format() ) {
		remove_action( 'genesis_post_title', 'genesis_do_post_title' );
		remove_action( 'genesis_before_post_content', 'genesis_post_info' );
		remove_action( 'genesis_after_post_content', 'genesis_post_meta' );
	}
}
?> 