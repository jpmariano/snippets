<?php 

function function_name( ){
 return "foo and bar";
}
add_shortcode( 'shortcode', 'function_name' );

//usage inside the contents area
[shortcode]
//outside the contents area
echo do_shortcode('[gallery]');

//Single Attributes Shortcode
function smp_map_it($addr)
{
  $base_map_url = 'http://maps.google.com/maps/api/staticmap?sensor=false&size=256x256&format=png&center=';
	?>
	<h2>Your map:</h2>
	<img width="256" height="256"
		src="<?php echo $base_map_url . urlencode($addr); ?>" />
	<?php 
}
add_shortcode('map-it','smp_map_it');

//Array of Attributes Shortcodes
function smp_map_it($atts,$content=null)
{  
	shortcode_atts( array( 'title' => 'Your Map:', 'address' => ''), $atts);
	$base_map_url = 'http://maps.google.com/maps/api/staticmap?sensor=false&size=256x256&format=png&center=';
	return '
	<h2>' . $atts['title'] . '</h2>
	<img width="256" height="256"
		src="' . $base_map_url . urlencode($atts['address']) . '" />';
}
	
add_shortcode('map-it','smp_map_it');
