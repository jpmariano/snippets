<?php
add_action( 'wp_enqueue_scripts', 'ch2pit_queue_stylesheet' ); 

function ch2pit_queue_stylesheet() {
  wp_enqueue_style( 'privateshortcodestyle',
  plugins_url( 'stylesheet.css', __FILE__ ) );
}