<?php
//Create a function
function twentyeleven_widgets_init() {

register_widget( 'Twenty_Eleven_Ephemera_Widget' );

register_sidebar( array(
'name' => __( 'Main Sidebar', 'twentyeleven' ),
'id' => 'sidebar-1',
'before_widget' => '<aside id="%1$s" class="widget %2$s">',
'after_widget' => "</aside>",
'before_title' => '<h3 class="widget-title">',
'after_title' => '</h3>',
) );
}

add action ('widgets_init', 'twentyeleven_widgets_init'); 

//using the registered Widgets Area
<div id="widget-logo"><?php if ( !function_exists('dynamic_sidebar') || 
!dynamic_sidebar('sidebar-1')) :?> <?php endif;?></div>
?>