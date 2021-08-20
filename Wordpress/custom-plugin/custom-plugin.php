<?php
/**
 * @package custom-plugin
 */
/*
Plugin Name: Custom Plugin
Plugin URI: https://customplugin.com/
Description: Used by millions, customplugin is quite possibly the best way in the world to <strong>protect your blog from spam</strong>. It keeps your site protected even while you sleep. To get started: 1) Click the "Activate" link to the left of this description, 2) <a href="https://customplugin.com/get/">Sign up for an customplugin plan</a> to get an API key, and 3) Go to your customplugin configuration page, and save your API key.
Version: 1.0
Author: Automattic
Author URI: https://automattic.com/wordpress-plugins/
License: GPLv2 or later
Text Domain: akismet
*/

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

Copyright 2005-2015 Automattic, Inc.
*/
global $wp_version;
if (!version_compare($wp_version, "4.0", ">=")){
    die("You need at least version 4.0 of wordpress");
}

class Custom_Plugin_Activated {
     static function install() {
            error_log("Custom Plugin is activated");
     }
}
register_activation_hook( __FILE__, array( 'Custom_Plugin_Activated', 'install' ) );

class Custom_Plugin_Deactivate {
     static function uninstall() {
            error_log("Custom Plugin is Deactivated");
     }
}
register_activation_hook( __FILE__, array( 'Custom_Plugin_Deactivate', 'install' ) );

class Custom_Plugin_Comment {
    
    function send_mail(){
        global $_REQUEST;
        $to = "jppm8387@yahoo.com";
        $subject = "New Comment Posted @ Your Blog ".$_REQUEST['subject'];
        $message = "Message From ".$_REQUEST['name']." at email ".$_REQUEST['email'].": \n".$_REQUEST['comments'];
        //php functions
        mail($to, $subject, $message);
    }
}

//http://adambrown.info/p/wp_hooks
//wp_hooks uses Function_Reference and PHP Classes and Functions
//https://codex.wordpress.org/Function_Reference
//http://php.net/manual/en/langref.php

//https://codex.wordpress.org/Plugin_API/
//https://developer.wordpress.org/reference/functions/add_action/
add_action( 'comment_post', array('Custom_Plugin_Comment','send_mail' ) );

class Custom_Plugin_Content_WaterMark {
    function modify_content(){
        if (is_feed()) {
            return $content.'Created by Custom Plugin, Copyright '.date(Y).' all rights reserved';
        }
        return $content;
    }
    
}
//https://developer.wordpress.org/reference/functions/add_filter/
add_filter( 'the_content', array('Custom_Plugin_Content_WaterMark','modify_content' ) );

//Overriding functions from /wp-includes/pluggable.php
if ( !function_exists('wp_new_user_notification') ) :
/**
 * Email login credentials to a newly-registered user.
 *
 * A new user registration notification is also sent to admin email.
 *
 * @since 2.0.0
 * @since 4.3.0 The `$plaintext_pass` parameter was changed to `$notify`.
 * @since 4.3.1 The `$plaintext_pass` parameter was deprecated. `$notify` added as a third parameter.
 * @since 4.6.0 The `$notify` parameter accepts 'user' for sending notification only to the user created.
 *
 * @global wpdb         $wpdb      WordPress database object for queries.
 * @global PasswordHash $wp_hasher Portable PHP password hashing framework instance.
 *
 * @param int    $user_id    User ID.
 * @param null   $deprecated Not used (argument deprecated).
 * @param string $notify     Optional. Type of notification that should happen. Accepts 'admin' or an empty
 *                           string (admin only), 'user', or 'both' (admin and user). Default empty.
 */
function wp_new_user_notification( $user_id, $deprecated = null, $notify = '' ) {
	if ( $deprecated !== null ) {
		_deprecated_argument( __FUNCTION__, '4.3.1' );
	}

	global $wpdb, $wp_hasher;
	$user = get_userdata( $user_id );

	// The blogname option is escaped with esc_html on the way into the database in sanitize_option
	// we want to reverse this for the plain text arena of emails.
	$blogname = wp_specialchars_decode(get_option('blogname'), ENT_QUOTES);

	if ( 'user' !== $notify ) {
		$switched_locale = switch_to_locale( get_locale() );
		$message  = sprintf( __( 'New user registration on your site %s:' ), $blogname ) . "\r\n\r\n";
		$message .= sprintf( __( 'Username: %s' ), $user->user_login ) . "\r\n\r\n";
		$message .= sprintf( __( 'Email: %s' ), $user->user_email ) . "\r\n";
        $message .= __('Custom Changes Added');
		@wp_mail( get_option( 'admin_email' ), sprintf( __( '[%s] New User Registration' ), $blogname ), $message );

		if ( $switched_locale ) {
			restore_previous_locale();
		}
	}

	// `$deprecated was pre-4.3 `$plaintext_pass`. An empty `$plaintext_pass` didn't sent a user notification.
	if ( 'admin' === $notify || ( empty( $deprecated ) && empty( $notify ) ) ) {
		return;
	}

	// Generate something random for a password reset key.
	$key = wp_generate_password( 20, false );

	/** This action is documented in wp-login.php */
	do_action( 'retrieve_password_key', $user->user_login, $key );

	// Now insert the key, hashed, into the DB.
	if ( empty( $wp_hasher ) ) {
		$wp_hasher = new PasswordHash( 8, true );
	}
	$hashed = time() . ':' . $wp_hasher->HashPassword( $key );
	$wpdb->update( $wpdb->users, array( 'user_activation_key' => $hashed ), array( 'user_login' => $user->user_login ) );

	$switched_locale = switch_to_locale( get_user_locale( $user ) );

	$message = sprintf(__('Username: %s'), $user->user_login) . "\r\n\r\n";
	$message .= __('To set your password, visit the following address:') . "\r\n\r\n";
	$message .= '<' . network_site_url("wp-login.php?action=rp&key=$key&login=" . rawurlencode($user->user_login), 'login') . ">\r\n\r\n";

	$message .= wp_login_url() . "\r\n";

	wp_mail($user->user_email, sprintf(__('[%s] Your username and password info'), $blogname), $message);

	if ( $switched_locale ) {
		restore_previous_locale();
	}
}
endif;

//https://developer.wordpress.org/themes/basics/
//https://codex.wordpress.org/Template_Tags
//https://developer.wordpress.org/themes/basics/template-hierarchy/
//https://developer.wordpress.org/themes/basics/the-loop/
//https://developer.wordpress.org/themes/basics/theme-functions/
//https://developer.wordpress.org/themes/basics/including-css-javascript/
//https://developer.wordpress.org/themes/basics/conditional-tags/