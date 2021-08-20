<?php
add_action( 'wp_head', 'ch2pho_page_header_output' );
function ch2pho_page_header_output() { ?>
<script type="text/javascript">
var gaJsHost = ( ( "https:" == document.location.protocol ) ?
"https://ssl." : "http://www." );
document.write( unescape( "%3Cscript src='" + gaJsHost +
"google-analytics.com/ga.js' \n\
type='text/javascript'%3E%d3C/script%3E" ) );
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker( "UA-xxxxxx-x" );
pageTracker._trackPageview();
} catch( err ) {}
</script>
<?php }