<?php

//Understand Drupal Events Versus Hook
/* Event System (event is an Object Oriented version of Hook system)
1. Create a Function
2. Tell Drupal to call your function, if something happens
3. Events are OOP version of hooks

//See Web Profiler events tab - This list all the events
//http://drupal-8.dd:8083/admin/reports/profiler/view/da9e84#events

See: DinoListener.php - Create an Event Listener (just a function to run)
See: dino_roar.services.yml - Register the Event Listener

//devdesktop/drupal-8/core/core.services.yml 
#See how drupal render works inside this file - Tags 
main_content_renderer.html:
    class: Drupal\Core\Render\MainContent\HtmlRenderer
    arguments: ['@title_resolver', '@plugin.manager.display_variant', '@event_dispatcher', '@module_handler', '@renderer', '@render_cache', '%renderer.config%']
    tags:
      - { name: render.main_content_renderer, format: html }
  main_content_renderer.ajax:
    class: Drupal\Core\Render\MainContent\AjaxRenderer
    arguments: ['@element_info']
    tags:
      - { name: render.main_content_renderer, format: drupal_ajax }
      - { name: render.main_content_renderer, format: iframeupload }

