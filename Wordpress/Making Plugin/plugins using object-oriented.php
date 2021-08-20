<?php
class CH2_OO_Private_Item_Text {
  function __construct() {
    add_shortcode( 'private', array( $this,
      'ch2pit_private_shortcode' ) );
    add_action( 'wp_enqueue_scripts', array( $this,
      'ch2pit_queue_stylesheet' ) );
  }
}