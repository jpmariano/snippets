<?php

class databasics_handler_sort_custom extends views_handler_sort {
	//Common filter to override
  function query() {
  	//So you can get the user id
    global $user; 
    // ORDER BY FIELD(uid, 1) DESC, uid ASC/DESC ; field function evaluates the value of the field
    $field = 'FIELD(' . $this->table . '.' . $this->field . ',' . $user->uid . ')';
		//Additional order by 
		//Parent Class : https://api.drupal.org/api/views/plugins%21views_plugin_query_default.inc/class/views_plugin_query_default/7
    		//https://api.drupal.org/api/views/plugins%21views_plugin_query_default.inc/function/views_plugin_query_default%3A%3Aadd_orderby/7
    $this->query->add_orderby(NULL, $field, 'DESC');
    $this->query->add_orderby(NULL, $this->table . '.' . $this->field, $this->options['order']);
  }
}
