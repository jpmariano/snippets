<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head>
	<title><?php bloginfo('name'); ?><?php wp_title(); ?></title> <!--first you print the title—which could be the title of a post or page, category, or date
																	archive, depending on where this file is used—and then the name of the site-->
	<meta http-equiv="Content-Type" content="text/html; charset=”<?php bloginfo('charset'); ?>" /> <!--For the character set, again you use the blog’s setting rather 	than specifying one. Like the language,the character set is specified in the wp-config.php file.-->
	<meta name="generator" content="WordPress <?php bloginfo('version'); ?>" /><!--counting the number of WordPress sites in the world (optional)-->
	
	<!-- leave this for stats -->
	<meta name="description" content="<?php bloginfo('description'); ?>" /> <!--description you entered under Settings ??
														General (“Just another WordPress blog,” unless you changed it).-->
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" /> <!--prints the URL of the current theme’s stylesheet-->
	
	<link rel="alternate" type="application/rss+xml" title="RSS Feed" href="<?php
	bloginfo('rss2_url'); ?>" /> <!--print links to the RSS2 and Atom feeds for the site-->
	<link rel="alternate" type="application/atom+xml" title="Atom Feed" href="<?php
	bloginfo('atom_url'); ?>" />
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" /> <!--prints a link to your site’s XML-RPC file
								(http://example.com/xmlrpc.php), which allows the trackback feature to function.-->
	<?php wp_head(); ?> <!--It’s a hook, which means
	that it does not print anything directly, but serves as a placeholder function. Developers can add their
	own code to this hook when they need to insert something—an extra stylesheet or script, for example—
	to the page header. There are a few built-in functions that hook into wp-head(), mostly to call JavaScript
	files.-->
</head>
<!-- post or page content, any comments or trackbacks visitors have left, and any sidebars you have defined.-->
<body <?php body_class(); ?>> <!--function prints a series of class names based on the content of the page being viewed-->
	<div id="header">
	<h1><?php bloginfo('name'); ?></h1>
	</div> <!-- #header -->
<div id="main">
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?> <!--if/else statement: if I have posts, then while there are posts, print some information about
																	each one; otherwise print an error message.-->
																	<!--WordPress performs a database query based on the context—
																	that is, which page you’re looking at—and the choices you made in Settings ?? Reading (regarding the
																	number of posts to display). This query is stored in the $query global variable, and the resulting posts are
																	stored in $posts.-->
		<h2 id="post-<?php the_ID(); ?>" class="<?php post_class(); ?>">
		<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent link
		to <?php the_title_attribute(); ?>"><?php the_title(); ?></a><!-- the_title() calls the global $post -->
		</h2>
		<?php the_content("Continue reading..."); ?> <!-- the_content(); calls the global $post / continue reading allows the user use the <!--more-->   
		<?php wp_link_pages(); ?>
		<div class="commentblock">
			<?php comments_template(); ?>
		</div><!--commentblock-->
	<?php endwhile; ?>
		<div class="navigation">
			<div class="alignleft"><?php posts_nav_link(); ?></div><!--posts nav link() function provides links to older posts (and newer ones if
																		you’re viewing an archive page). Note that this tag works only for posts-->
			<div class="clear"><!-- --></div>
		</div><!-- .navigation -->
	<?php else: ?>
		<h2>Not Found</h2>
		<p>The posts you were looking for could not be found.</p>
	<?php endif; ?>
</div> <!-- #main -->
<div id="sidebar">
	<?php if ( !dynamic_sidebar('Sidebar') ) : endif; ?>
</div> <!-- #sidebar -->
<div id="footer">
	<p>&copy; <?php echo date('Y '); bloginfo('name'); ?></p>
</div> <!-- #footer -->
<?php wp_footer(); ?>
</body>
</html>