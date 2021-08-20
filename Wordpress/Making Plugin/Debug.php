<?php
/*To activate this tool, change the second parameter of the line defining
the WP_DEBUG constant from false to true in wp_config.php:*/
define( 'WP_DEBUG', true );


/*To prevent debug messages from affecting the site's layout
Debug Bar (http://wordpress.org/extend/plugins/debug-bar/)

WP_DEBUG_LOG: Stores all debug messages in a file named debug.log in the site's
wp-content directory for later analysis

WP_DEBUG_DISPLAY: Indicates whether or not error messages should be
displayed on-screen

SAVEQUERIES: Stores database queries in a variable that can be displayed in the
page footer (see http://codex.wordpress.org/Editing_wp-config.
php#Save_queries_for_analysis for more info)
*/