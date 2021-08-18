<?php

/**
 * Implements hook_views_data().
 */
function databasics_views_data() {
  $data = array();

  $data['databasics']['table']['group'] = t('Databasics');

  $data['databasics']['table']['base'] = array(
    'title' => t('Databasics'),
    'help' => t('Stores node visits for users.'),
  );
  
	
	
	//how to join tables 
  $data['databasics']['table']['join'] = array(
    //Join 1: Shows as identifier label when you add a relationship
    'node' => array(
       //left_field - the field on the base table or the node table
      'left_field' => 'nid',
      //field of the databsics table
      'field' => 'nid',
    ),
    //Join 2
    'user' => array(
      //user table to 
      'left_field' => 'uid',
      // databasics table
      'field' => 'uid',
    ),
  );

  // Node NID field. copied from node.views.inc inside the views modules folder
  $data['databasics']['nid'] = array(
    'title' => t('Nid'),
    'help' => t('The node ID.'), // The help that appears on the UI,
    // Information for displaying the nid 
    // Node handers are inside the views -> module -> node folder
    'field' => array(
      'handler' => 'views_handler_field_node',
      'click sortable' => TRUE,
    ),
    // Information for accepting a nid as an argument; This is a contextual filter in views ui
    'argument' => array(
      'handler' => 'views_handler_argument_node_nid',
      'numeric' => TRUE,
      'validate type' => 'nid',
    ),
    // Information for accepting a nid as a filter
    'filter' => array(
      'handler' => 'views_handler_filter_numeric',
    ),
    // Information for sorting on a nid.
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    //Relationship between  $data['databasics']['nid'] (nid field) and the one in the node table
    'relationship' => array(
      'base' => 'node',
      //FK
      'field' => 'nid',
      // Relationship class
      'handler' => 'views_handler_relationship',
      //Views UI purpose
      'label' => t('Node'),
    ),
  );

  // User UID field. 
  // Copy and paste from hook_views_data 
  $data['databasics']['uid'] = array(
    'title' => t('User ID'),
    'help' => t("The User that viewed the node."),
    'field' => array(
    
		//Handler can be found inside view/module/user
      'handler' => 'views_handler_field_numeric',
    ),
    'argument' => array(
      'handler' => 'views_handler_argument_user_uid',
    ),
    'relationship' => array(
      'base' => 'users',
      'field' => 'uid',
      'handler' => 'views_handler_relationship',
      'label' => t('Visitor'),
    ),
  );

  // View count field.
  $data['databasics']['view_count'] = array(
    'title' => t('Visits'),
    'help' => t('The number of times the node has been viewed.'),
    'field' => array(
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

  // Last visited field.
  $data['databasics']['last_viewed'] = array(
    'title' => t('Last visit'),
    'help' => t('Timestamp of when the page was visited.'),
    'field' => array(
      'handler' => 'views_handler_field_date',
      'click sortable' => TRUE,
    ),
    'sort' => array(
      'handler' => 'views_handler_sort_date',
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_date',
    ),
  );

  return $data;
}
