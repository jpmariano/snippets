<?php 
//Replace the standard loop with our custom loop 
remove_action( 'genesis_loop', 'genesis_do_loop' );
add_action( 'genesis_loop', 'child_do_custom_loop' );
 
function child_do_custom_loop() {
 
    global $paged; // current paginated page
    global $query_args; // grab the current wp_query() args
    $args = array(
        'category__not_in' => 42, // exclude posts from this category
        'paged'            => $paged, // respect pagination
    );
 
    genesis_custom_loop( wp_parse_args($query_args, $args) );
 
}
?>