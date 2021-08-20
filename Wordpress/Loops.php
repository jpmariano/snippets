<!------------------------- Query Post ---------------------->
<!-- 
	If you are working with a single loop and just want to modify the type of posts that are returned, 
	use query_posts(). It’s perfect for limiting the number of posts, excluding posts from a certain 
	category or tag, and so on.
-->
	
<?php

// The WordPress Loop - customized with query_posts
query_posts('cat=-9'); // exclude Asides category (tag_ID = 9)
if (have_posts()) : while (have_posts()) : the_post(); 
//Place What you want to pull
endwhile; else:
//Place Additional condition
endif;
?>

<?php // The WordPress Loop - customized with query_posts
global $query_string; // grab the global query information
$posts = query_posts($query_string.'&cat=-7,-8,-9&posts_per_page=3&order=ASC');
if (have_posts()) : while (have_posts()) : the_post();
//Place What you want to pull
endwhile; else:
//Place Additional condition
endif;
wp_reset_query(); // reset the query
?>

<!------------------------- WP Query ---------------------->
<!-- 
	For a powerful way to customize multiple loops, use WP_Query(). 
	By setting up additional instances of WP_Query() in your theme template, 
	you can create any number of multiple loops, and customize the output of each.
-->

<?php // The WordPress Loop - customized with WP_Query
$custom_query = new WP_Query('cat=-9'); // exclude Asides category Example 1
$custom_query = new WP_Query('cat=-7,-8,-9'); // exclude any categories Example 2
$custom_query = new WP_Query('posts_per_page=3'); // limit number of posts Example 3
$custom_query = new WP_Query('order=ASC'); // reverse the post order  Example 4
$custom_query = new WP_Query('cat=-7,-8,-9&posts_per_page=3&order=ASC'); // rCombination  Example 5
while($custom_query->have_posts()) : $custom_query->the_post();
//Place What you want to pull

endwhile;
wp_reset_postdata(); // reset the query
?>


<?php // Loop 1
$first_query = new WP_Query('cat=-1'); // exclude category
while($first_query->have_posts()) : $first_query->the_post();
//Place What you want to pull
endwhile;
wp_reset_postdata(); // reset the query

// Loop 2
$second_query = new WP_Query('cat=-2'); // exclude category
while($second_query->have_posts()) : $second_query->the_post();
//Place What you want to pull
endwhile;
wp_reset_postdata(); // reset the query

// Loop 3
$third_query = new WP_Query('cat=-3'); // exclude category
while($third_query->have_posts()) : $third_query->the_post();
//Place What you want to pull
endwhile;
wp_reset_postdata(); // reset the query
?>


<!------------------------- get_posts ---------------------->
<!-- 
	Last but not least, use the simple get_posts() function to easily 
	create additional loops anywhere in your theme. get_posts() accepts 
	the same parameters as query_posts(), and is perfect for adding custom 
	loops to your sidebar, footer, or anywhere else in your theme.
-->
<?php // additional loop via get_posts
global $post;
$args = array('category' => -9); // exclude Asides category Example 1
$args = array('category'=>-7,-8,-9, 'numberposts'=>3, 'order'=>'ASC'); // Example 2
$custom_posts = get_posts($args);
foreach($custom_posts as $post) : setup_postdata($post);
//Place What you want to pull
endforeach;
?>

<!--------------- How To Pull Example ------------------------>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<div <?php post_class(); ?> id="post-<?php the_ID(); ?>">
		<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
		<p class="meta">Posted on <?php the_time('F jS, Y'); ?></p>
		<?php the_content('Read More'); ?>
		<p><?php the_tags('Tags: ', ', ', '<br />'); ?>
		Posted in <?php the_category(', '); ?></p>
	</div>
<?php endwhile; ?>
	<div class="next-posts"><?php next_posts_link('&laquo; Older Entries') ?></div>
	<div class="prev-posts"><?php previous_posts_link('Newer Entries &raquo;') ?></div>
<?php endif; ?>


<?php if (have_posts()) : ?>
	<ol>
		<?php while (have_posts()) : the_post(); ?>
			<li <?php post_class(); ?> id="post-<?php the_ID(); ?>">
				<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				<p class="meta">Posted on <?php the_time('F jS, Y'); ?></p>
				<?php the_content('Read More'); ?>
				<p><?php the_tags('Tags: ', ', ', '<br />'); ?>
				Posted in <?php the_category(', '); ?></p>
			</li>
		<?php endwhile; ?>
	</ol>
<?php endif; ?>


<?php if (have_posts()) : ?>
	<dl>
		<?php while (have_posts()) : the_post(); ?>
			<dt <?php post_class(); ?> id="post-<?php the_ID(); ?>">
				<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
			</dt>
			<dd>
				<?php the_excerpt(); ?>
			</dd>
		<?php endwhile; ?>
	</dl>
<?php endif; ?>

<?php 
	// Loop 1 - Left Sidebar
	$first_query = new WP_Query('cat=7&showposts=3');
		while($first_query->have_posts()) : $first_query->the_post();
			the_excerpt();
		endwhile;
			wp_reset_postdata();
			
	// Loop 2 - Left Column
	$second_query = new WP_Query('cat=-7&showposts=5&paged='.$paged);
		while($second_query->have_posts()) : $second_query->the_post();
			the_content();
		endwhile;
			next_posts_link(); previous_posts_link();
			wp_reset_postdata();
			
	// Loop 3 - Right Column
	$third_query = new WP_Query('cat=-7&showposts=5&offset=5');
		while($third_query->have_posts()) : $third_query->the_post();
			the_content();
		endwhile;
			wp_reset_postdata();
	// Loop 4 - Right Sidebar
	$fourth_query = new WP_Query('cat=-7&showposts=10&offset=10');
		while($fourth_query->have_posts()) : $fourth_query->the_post();
			the_content();
		endwhile;
			wp_reset_postdata();