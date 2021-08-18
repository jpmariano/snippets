<?php
/*
Steps
- Locate the documentation for the hook
- Copy the function definition into your module's .module file
- Rename the function
- Add your custom code


api.drupal.org
$ drupal generate:module
$ drush en modulename -y
$ drush cr
- Search for hook_entity_view
//copy existing code inside modulename.module
*/
function hook_entity_view(array &$build, \Drupal\Core\Entity\EntityInterface $entity, \Drupal\Core\Entity\Display\EntityViewDisplayInterface $display, $view_mode) {
  // Only do the extra work if the component is configured to be displayed.
  // This assumes a 'mymodule_addition' extra field has been defined for the
  // entity bundle in hook_entity_extra_field_info().
  /*
  if ($display->getComponent('mymodule_addition')) {
    $build['mymodule_addition'] = array(
      '#markup' => mymodule_addition($entity),
      '#theme' => 'mymodule_my_additional_field',
    );
  }*/
   // Custom code and comments go here ...
}

/* 
Discovering Existing hooks 
1. module/modulename/modulename.api.php
2. api.drupa.org (topics - > hooks )
3. api.drupa.org/hook_name
4. core/lib/Drupal/Core/Extension/ModuleHandler.php line 399 turn on debugging
5. Install Devel Module
  $ drush help fn-hook
  $ drush fn-hook modulename


Define a New hook  (See hooks_example module)
  1. Choosing a unique name for your hook
  2. Documenting your new hook
  3. Invoking the hook in your .module file  //ways to invoke the hook core/lib/Drupal/Core/Extension/ModuleHandler.php 

See Example module: hooks_example 
hook_modulename_functionname();
Place a doc block
and provide implementation example  