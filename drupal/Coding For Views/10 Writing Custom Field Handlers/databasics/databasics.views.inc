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

  $data['databasics']['table']['join'] = array(
    'node' => array(
      'left_field' => 'nid',
      'field' => 'nid',
    ),
    'user' => array(
      'left_field' => 'uid',
      'field' => 'uid',
    ),
  );

  // Node NID field.
  $data['databasics']['nid'] = array(
    'title' => t('Nid'),
    'help' => t('The node ID.'), // The help that appears on the UI,
    // Information for displaying the nid
    'field' => array(
      'handler' => 'views_handler_field_node',
      'click sortable' => TRUE,
    ),
    // Information for accepting a nid as an argument
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
    'relationship' => array(
      'base' => 'node',
      'field' => 'nid',
      'hander' => 'views_hander_relationship',
      'label' => t('Node'),
    ),
  );

  // User UID field.
  $data['databasics']['uid'] = array(
    'title' => t('User ID'),
    'help' => t("The User that viewed the node."),
    'field' => array(
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
      'handler' => 'databasics_handler_field_percent',
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
