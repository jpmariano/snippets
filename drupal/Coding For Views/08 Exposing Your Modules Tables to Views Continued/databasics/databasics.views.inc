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
	 //Describe the fields to views; You can see some of these arrays prints to views ui field section; You can see this in add a fields in views ui
  $data['databasics']['view_count'] = array(
    'title' => t('Visits'),
    'help' => t('The number of times the node has been viewed.'),
    //It can take information about any handler; Handler names: Are the bolded settings inside the views ui 
    // or inside the views module handlers folder remove .inc
    'field' => array(	
      //Handler name: views_handler_field_numeric - views module, handler type views_handler_field_numeric.inc - note remove .inc
      // Tells module to use this class to handle numeric field
      // After adding the field handler - depending of what kind of field handler you are using is what the settings will display
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
