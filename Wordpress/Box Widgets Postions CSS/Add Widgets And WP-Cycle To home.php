remove_action( 'genesis_after_post_content', 'genesis_post_meta', 10 );
remove_action( 'genesis_loop', 'genesis_do_loop' );
add_action( 'genesis_before_loop', 'wp_cycle' );
add_action( 'genesis_loop', 'child_home_loop_helper' );
/**
 * Add Widgets and WP-Cycle to home.php.
 *
 * @author Greg Rickaby
 * @since 1.0.0
 */
function child_home_loop_helper() { ?>

<div id="homepage_widgets">
  <div class="column1">
		<ul>
 			<?php if ( !function_exists( 'dynamic_sidebar' ) || !dynamic_sidebar( 'Home 1' ) ){ ?><?php } ?>
 		</ul>
	</div>
	<div class="column2">
		<ul>
 			<?php if ( !function_exists( 'dynamic_sidebar' ) || !dynamic_sidebar( 'Home 2' ) ){ ?><?php } ?>
 		</ul>
	</div>
</div>

<?php }

genesis();