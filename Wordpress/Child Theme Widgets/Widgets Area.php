<?php
//To Create Genesis Widget Area
genesis_register_sidebar( array(
  'id'            => 'disclaimer-text',
	'name'          => 'Disclaimer Text',
	'description'   => 'This is for the Facebook Widget.',
	'before_widget' => '',
	'after_widget'  => ''
) );

//To use inside your theme
dynamic_sidebar( 'disclaimer-text'); 


//Complicated Examples
add_action('genesis_after_content_sidebar_wrap', 'prospac_do_landing_social');
function prospac_do_landing_social() { 
  echo '<div class="landing-bottom">';
	echo '<div class="disclaimer">';
	dynamic_sidebar( 'disclaimer-text');
	echo '</div>';
	echo '</div>';
}
?>