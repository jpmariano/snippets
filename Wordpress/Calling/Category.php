<?php 
/*
* Template Name: Post Doctor
*/ 
get_header(doctor); ?>
			<div id="primary" <?php post_class()?>>
			<div id="content" role="main">
				<?php while ( have_posts() ) : the_post(); ?>
					<?php get_template_part( 'content', 'doctor' ); ?>
				<?php endwhile; // end of the loop. ?>
				</div><!-- #content -->
			</div><!-- #primary -->	
<?php get_footer(); ?>