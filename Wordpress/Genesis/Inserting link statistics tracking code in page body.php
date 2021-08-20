<?php 
add_filter( 'the_content', 'ch2lfa_link_filter_analytics' );
function ch2lfa_link_filter_analytics ( $the_content ) {
  $new_content = str_replace( "href",
  "onClick=\"recordOutboundLink(this, 'Outbound Links', '" .
  home_url() . "' );return false;\" href", $the_content );
  return $new_content;
}


add_action( 'wp_footer', 'ch2lfa_footer_analytics_code' );

function ch2lfa_footer_analytics_code() { ?>
  <script type="text/javascript">
  function recordOutboundLink( link, category, action ) {
  _gat._getTrackerByName()._trackEvent( category, action );
  setTimeout( 'document.location = "' + link.href + '"', 100 );
  }
  </script>
  <?php }