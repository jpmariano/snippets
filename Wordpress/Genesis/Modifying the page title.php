<?php
add_filter( 'wp_title', 'ch2tf_title_filter' );

function ch2tf_title_filter ( $title ) {
//Select new title based on item type
  if ( is_front_page() )
  $new_title = 'Front Page >> ';
  elseif ( get_post_type() == 'page' )
  $new_title = 'Page >> ';
  elseif ( get_post_type() == 'post' )
  $new_title = 'Post >> ';
  // Append previous title to title prefix
  if ( isset( $new_title ) ) {
  $new_title .= $title;
  // Return new complete title to be displayed
  return $new_title;
  } else {
  return $title;
  }
}

//Output: the browser's title bar or navigation tabs display additional text before
//their name