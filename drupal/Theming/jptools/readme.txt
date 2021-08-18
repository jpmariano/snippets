# Paste this code on top of page.tpl.php

 dpm( get_defined_vars() ); --- list all variables available 
 
 dpm( debug_backtrace() );  --- output an array of each function your page contents went through before they were output to the browser, plus it shows the location of these functions.
 
# dpr – Shortcut for dprint_r.
# dvr – Similar to dpr, but uses var_dump instead of print_r.
# dpm – Similar to dpr but print_r's a variable as a message using drupal_set_message.
# dvm – Similar to dpm but uses var_dump instead of print_r.

Links: 
Drupal: https://github.com/mikecrittenden/drupal-7-deconstructed
Top Ten Hooks: http://www.webomelette.com/top-10-drupal-hooks-contrib
Coding Standards: https://www.drupal.org/node/172169
Data Sanitazation: https://api.drupal.org/api/drupal/includes!common.inc/group/sanitization/7
Securing Drupal: https://www.drupal.org/security/secure-configuration , https://www.facebook.com/notes/philippine-drupal-users-group-phdug/drupal-security-modules-and-solutions/553510794665736
Cache: https://www.drupal.org/project/views_content_cache, https://www.drupal.org/project/boost
drupal.js: https://www.drupal.org/node/304258

Output Sanitazation: https://api.drupal.org/api/drupal/includes!common.inc/group/sanitization/7
Input: https://www.drupal.org/node/1288708, https://api.drupal.org/api/drupal/includes!common.inc/group/validation/7 , drupal.js https://www.drupal.org/node/304258