<?php
//Make sure this is databasics.views.inc is using your custom filter databasics_handler_filter_numeric in line 90
class databasics_handler_filter_numeric extends views_handler_filter_numeric {
  function operators() {
  	//This gets the function operators inside views_handler_filter_numeric 
    $operators = parent::operators();
		//your custom additional operator
    $operators['even'] = array(
      'title' => t('Is an even number'),
      //Name of the function to be called when someone choose this filter
      'method' => 'op_even',
      //Used in Views UI
      'short' => t('even'),
      //Used by options form by the filter handler numeric operator
      'values' => 0,
    );
    return $operators;
  }
  
	//In order to implement this filter go to class views_handler_filter_numeric
	//https://api.drupal.org/api/views/handlers%21views_handler_filter_numeric.inc/class/views_handler_filter_numeric/7
	// See This any of these samples
		// views_handler_filter_numeric::op_between		function	
		//views_handler_filter_numeric::op_empty		function	
		//views_handler_filter_numeric::op_regex		function	
		//views_handler_filter_numeric::op_simple
	//
  function op_even($field) {
  	//add_where_expression ; help in api.drupal.org https://api.drupal.org/api/views/groups search for query
  	//https://api.drupal.org/api/views/plugins%21views_plugin_query.inc/class/views_plugin_query/7
  	//$this->options['group'] - graps the group option from views
  	//'MOD(' . $field . ', 2) = 0' - divide $field  with 2 and when the remainder is 0 then assume that it is even
  	// This shows in views filter criteria
    $this->query->add_where_expression($this->options['group'], 'MOD(' . $field . ', 2) = 0');
  }
}
