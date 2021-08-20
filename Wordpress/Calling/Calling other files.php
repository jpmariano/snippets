<?php
//Inside page.php
get_header(); ?>
  	<div id="primary-container-full">
				<?php while ( have_posts() ) : the_post(); ?>                   
					<?php get_template_part( 'content', 'fullpage' ); //Calls content-fullpage.php?>
				<?php endwhile; // end of the loop. ?>
		</div><!-- #primary -->
<?php get_footer(); ?>
