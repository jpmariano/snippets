<?php
//http://codex.wordpress.org/Function_Reference/add_action 
//add_action($tag, $function_to_add, $priority, $accepted_args);
add_action('hookname','function_name', 10, 1);
function function_name()
{
echo "Hello World";
}

//https://codex.wordpress.org/Plugin_API/Filter_Reference
//add_filter( $tag, $function_to_add, $priority, $accepted_args );
add_filter('filtername','function_name');
function function_name($content)
{
return $content;
}

?>