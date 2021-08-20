<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
//https://developer.wordpress.org/themes/basics/
//https://codex.wordpress.org/Template_Tags

//https://developer.wordpress.org/themes/basics/template-hierarchy/
//https://developer.wordpress.org/files/2014/10/template-hierarchy.png
//https://www.youtube.com/watch?v=-AO5jBsUpJY
//https://www.youtube.com/watch?v=Pb4oQsWdmL0

//https://developer.wordpress.org/themes/basics/the-loop/
//https://developer.wordpress.org/themes/basics/theme-functions/
//https://developer.wordpress.org/themes/basics/including-css-javascript/
//https://developer.wordpress.org/themes/basics/conditional-tags/

//https://codex.wordpress.org/Template_Tags 
get_header(); ?> <!-- retrives header.php -->

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
       <!-- https://developer.wordpress.org/themes/basics/the-loop/ -->
		<?php if ( have_posts() ) : ?>
			<!-- https://developer.wordpress.org/themes/basics/conditional-tags/ -->
			<?php if ( is_home() && ! is_front_page() ) : ?>
				<header>
				<!-- https://codex.wordpress.org/Template_Tags  -->
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>
			<?php endif; ?>

			<?php
			// Start the loop.
			while ( have_posts() ) : the_post();

				/*
				 * Include the Post-Format-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
				//https://codex.wordpress.org/Template_Tags and https://codex.wordpress.org/Function_Reference/
				get_template_part( 'template-parts/content', get_post_format() );

			// End the loop.
			endwhile;

			// Previous/next page navigation.
			//https://codex.wordpress.org/Pagination
			the_posts_pagination( array(
				'prev_text'          => __( 'Previous page', 'twentysixteen' ),
				'next_text'          => __( 'Next page', 'twentysixteen' ),
				'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'twentysixteen' ) . ' </span>',
			) );

		// If no content, include the "No posts found" template.
		else :
			//https://codex.wordpress.org/Template_Tags 
			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>

		</main><!-- .site-main -->
	</div><!-- .content-area -->
<!-- https://codex.wordpress.org/Template_Tags  -->
<?php get_sidebar(); ?>
<?php get_footer(); ?>
