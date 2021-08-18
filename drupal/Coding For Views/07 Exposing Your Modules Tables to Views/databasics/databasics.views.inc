<?php

/**
 * Implements hook_views_data().
 * Step 2: Describes data to views. A good example is inside the views module node.views.inc	
 */
function databasics_views_data() {
  $data = array();
	
	
	//Step 2-c: This will show in add filter criteria in views ui
  //$data['tablename']['table']['group'] = t('Databasics'); 
  $data['databasics']['table']['group'] = t('Databasics');
	
	
 //Step 2-a:
 //$data['tablename']['table']['base'] = array(); Advertise the tablse as a base table to views.
 //This code show on views ui -> add new view -> show dropdown
  $data['databasics']['table']['base'] = array(
    //Views Title and Help
    'title' => t('Databasics'),
    'help' => t('Stores node visits for users.'),
  );
  
	 //Step 2-b:
	 //Describe the fields to views; You can see some of these arrays prints to views ui field section
  $data['databasics']['view_count'] = array(
    'title' => t('Visits'),
    'help' => t('The number of times the node has been viewed.'),
    'field' => array(	
      //handlers are the field settings of the field
      'handler' => 'views_handler_field_numeric',
      'click sortable' => TRUE,
    ),
    // ORDER BY clause in our SQL builder.
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    // Filter handler.
    'filter' => array(
      'handler' => 'views_handler_filter_numeric',
    ),
  );

  return $data;
}
