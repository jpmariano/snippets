<?php
add_shortcode( 'private', 'ch2pit_private_shortcode' );
function ch2pit_private_shortcode( $atts, $content = null ) {
  if ( is_user_logged_in() )
  return '<div class="private">' . $content . '</div>';
  
  else
  
  return '';
}
/*
Similar to a filter function, enclosing shortcodes receive a copy of the text that has been
wrapped with the new tags. It is then possible to return this text with additional HTML code, or
completely replace it with new content. In this specific case, we used the is_user_logged_in
WordPress function to determine if the current visitor is logged in to the site. Based on the
result of that query, the code determines if the original content should be displayed with some
additional styling code or if it should not be displayed at al */
?> 