<?php
//Define A new Plugin type 
//See plugin_type_example
/* Steps:
1. Create a plugin manager, and define it as a service
2. Choose a discovery method. Annotations or YAML?
3. Define an interface for plugin instances
4. Define an annotation class
5. Provide a base class

Use Drupal Console
$ drupal generate:module 
$ drupal list | grep plugin
$ drupal generate:plugin:type:annotation
