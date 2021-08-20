<?php 
add_action( 'wp_head', 'ch2fi_page_header_output' );
function ch2fi_page_header_output() {
  $icon_url = plugins_url( 'favicon.ico', __FILE__ );
  ?>
  <link rel="shortcut icon" href="<?php echo $icon_url; ?>" />
  <?php }
  
//Other Functions to Find File Locations
// get_theme_root(): Returns the address of the theme installation directory
//  get_template_directory_uri(): Retrieves the URI to the current theme's files
//  admin_url(): Provides the address of the WordPress administrative pages
//  content_url(): Indicates where the wp-content directory can be found
//  site_url() and home_url(): Return the site address
// includes_url(): Provides the location of WordPress include files
//  wp_upload_dir(): Indicates the directory where user-uploaded files are stored