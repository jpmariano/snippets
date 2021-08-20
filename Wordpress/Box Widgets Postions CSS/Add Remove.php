<?php 
//Layout.php
add_action( 'genesis_init', 'genesis_create_initial_layouts', 0 );
Feed.php
add_filter( 'feed_link', 'genesis_feed_links_filter', 10, 2 );
add_action( 'template_redirect', 'genesis_feed_redirect' );
Options.php
add_filter( 'get_term', 'genesis_get_term_filter', 10, 2 );
//SEO.php
add_action( 'after_setup_theme', 'genesis_seo_compatibility_check', 5 );
add_action( 'admin_notices', 'genesis_scribe_nag' );
add_action( 'admin_init', 'genesis_disable_scribe_nag' );
Upgrade.php
add_action( 'admin_init', 'genesis_upgrade', 20 );
add_action( 'genesis_upgrade', 'genesis_upgrade_redirect' );
add_action( 'admin_notices', 'genesis_upgraded_notice' );
add_filter( 'update_theme_complete_actions', 'genesis_update_action_links', 10, 2 );
add_action( 'admin_notices', 'genesis_update_nag' );
add_action( 'init', 'genesis_update_email' );
add_filter( 'site_transient_update_themes', 'genesis_update_push' );
add_filter( 'transient_update_themes', 'genesis_update_push' );
add_action( 'load-update-core.php', 'genesis_clear_update_transient' );
add_action( 'load-themes.php', 'genesis_clear_update_transient' );
Widgetize.php
add_action( 'genesis_setup', 'genesis_register_default_widget_areas' );
add_action( 'after_setup_theme', 'genesis_register_footer_widget_areas' );

//Structure
//Archive.php
add_filter( 'genesis_term_intro_text_output', 'wpautop' );
add_action( 'genesis_before_loop', 'genesis_do_taxonomy_title_description', 15 );
add_filter( 'genesis_author_intro_text_output', 'wpautop' );
add_action( 'genesis_before_loop', 'genesis_do_author_title_description', 15 );
add_action( 'genesis_before_loop', 'genesis_do_author_box_archive', 15 );
//Comments.php
add_action( 'genesis_after_post', 'genesis_get_comments_template' );
add_action( 'genesis_comments', 'genesis_do_comments' );
add_action( 'genesis_pings', 'genesis_do_pings' );
add_action( 'genesis_list_comments', 'genesis_default_list_comments' );
add_action( 'genesis_comment_form', 'genesis_do_comment_form' );
add_filter( 'comment_form_defaults', 'genesis_comment_form_args' );
//Footer.php
add_action( 'genesis_before_footer', 'genesis_footer_widget_areas' );
add_action( 'genesis_footer', 'genesis_footer_markup_open', 5 );
add_action( 'genesis_footer', 'genesis_footer_markup_close', 15 );
add_filter( 'genesis_footer_output', 'do_shortcode', 20 );
add_action( 'genesis_footer', 'genesis_do_footer' );
add_filter( 'genesis_footer_scripts', 'do_shortcode' );
add_action( 'wp_footer', 'genesis_footer_scripts' );
//header.php
add_action( 'genesis_doctype', 'genesis_do_doctype' );
add_action( 'get_header', 'genesis_doc_head_control' );
add_action( 'genesis_site_title', 'genesis_seo_site_title' );
add_action( 'genesis_site_description', 'genesis_seo_site_description' );
add_filter( 'wp_title', 'genesis_doctitle_wrap', 20 );
add_action( 'genesis_title', 'wp_title' );
add_filter( 'wp_title', 'genesis_default_title', 10, 3 );
add_action( 'genesis_meta', 'genesis_seo_meta_description' );
add_action( 'genesis_meta', 'genesis_seo_meta_keywords' );
add_action( 'genesis_meta', 'genesis_robots_meta' );
add_action( 'genesis_meta', 'genesis_show_theme_info_in_head' );
add_action( 'wp_head', 'genesis_do_meta_pingback' );
add_action( 'wp_head', 'genesis_canonical', 5 );
add_action( 'wp_head', 'genesis_rel_author' );
add_action( 'genesis_meta', 'genesis_load_favicon' );
add_filter( 'genesis_header_scripts', 'do_shortcode' );
add_action( 'wp_head', 'genesis_header_scripts' );
add_action( 'after_setup_theme', 'genesis_custom_header' );
add_action( 'genesis_header', 'genesis_header_markup_close', 15 );
add_action( 'genesis_header', 'genesis_do_header' );
//Layout.php
add_filter( 'content_width', 'genesis_content_width', 10, 3 );
add_filter( 'body_class', 'genesis_custom_body_class', 15 );
add_filter( 'body_class', 'genesis_header_body_classes' );
add_filter( 'body_class', 'genesis_layout_body_classes' );
add_filter( 'body_class', 'genesis_style_selector_body_classes' );
add_action( 'genesis_after_content', 'genesis_get_sidebar' );
add_action( 'genesis_after_content_sidebar_wrap', 'genesis_get_sidebar_alt' );
//Loop.php
add_action( 'genesis_loop', 'genesis_do_loop' );
add_action( 'after_setup_theme', 'genesis_register_nav_menus' );
add_action( 'genesis_after_header', 'genesis_do_nav' );
add_action( 'genesis_after_header', 'genesis_do_subnav' );
add_filter( 'wp_nav_menu_items', 'genesis_nav_right', 10, 2 );
add_filter( 'post_class', 'genesis_entry_post_class' );
add_filter( 'post_class', 'genesis_custom_post_class', 15 );
add_action( 'genesis_before_post_title', 'genesis_do_post_format_image' );
add_action( 'genesis_post_title', 'genesis_do_post_title' );
add_action( 'genesis_post_content', 'genesis_do_post_image' );
add_action( 'genesis_post_content', 'genesis_do_post_content' );
add_action( 'genesis_loop_else', 'genesis_do_noposts' );
add_filter( 'genesis_post_info', 'do_shortcode', 20 );
add_action( 'genesis_before_post_content', 'genesis_post_info' );
add_filter( 'genesis_post_meta', 'do_shortcode', 20 );
add_action( 'genesis_after_post_content', 'genesis_post_meta' );
add_action( 'genesis_after_post', 'genesis_do_author_box_single' );
add_action( 'genesis_after_endwhile', 'genesis_posts_nav' );
//Search.php
add_filter( 'get_search_form', 'genesis_search_form' );
//Sidebar.php
add_action( 'genesis_sidebar', 'genesis_do_sidebar' );
add_action( 'genesis_sidebar_alt', 'genesis_do_sidebar_alt' );
