<?php

/**
 * Page callback for the 'user/%/magic tab.
 */
function menu_magic_user_tab($wildcard) {
  //If the wildcard is numeric, user_load(1)
  if (is_numeric($wildcard) && ($account = user_load($wildcard))) {
    return array(
      '#type'   => 'markup',
      //%username - acts as a variable that pulls account name based on $wildcard (%)
      '#markup' => t("%username is totally awesome.", array('%username' => $account->name)),
    );
  }
  else {
  	//drupal_not_found() - displays a 404 page
    return drupal_not_found();
  }
}