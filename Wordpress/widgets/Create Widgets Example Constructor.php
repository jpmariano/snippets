<?php
namespace a\b\c;

class My_Widget_Class extends \WP_Widget {
  function __construct() {
       	    parent::__construct( 'baseID', 'name' );
        }
        // ... rest of functions
}

add_action( 'widgets_init', function(){
     return register_widget( 'a\b\c\My_Widget_Class' );
}); 