<?php

function my_plugin_activate() {
 //db create, create options, etx.
 error_log("my plugin activated");
}

register_activation_hook(__FILE__,"my_plugin_activate");

function my_plugin_deactivate(){
  error_log("my plugin deactivated");
}

register_deactivation_hook(__FILE__, "my_plugin_deactivate");