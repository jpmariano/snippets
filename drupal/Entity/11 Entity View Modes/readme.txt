videoentity.module
'views controller class' => 'EntityDefaultViewsController',
     // Custom view modes.
     'view modes' => array(
      'non_member' => array(
        'label' => t('Non-Member'),
        'custom settings' => FALSE,
      ),
      'member' => array(
        'label' => t('Member'),
        'custom settings' => FALSE,
      ),
     ),


/**
 * Callback for /video/ID page.
 *
 * Just a place to render a complete video entity.
 */
function videoentity_view_entity($video) {
  drupal_set_title($video->name);
  $video_entity = entity_view('video', array($video->id => $video), 'member');
  kpr($video_entity);
  return $video_entity;
}


public function buildContent($entity, $view_mode = 'non_member', $langcode = NULL, $content = array()) {
    $build = parent::buildContent($entity, $view_mode, $langcode, $content);

    $build['duration'] = array(
      '#type' => 'markup',
      '#markup' => format_interval($entity->duration),
    );

    if ($view_mode == 'member') {
      $build['embedcode'] = array(
        '#type' => 'markup',
        '#markup' => '<iframe width="560" height="315" src="http://www.youtube.com/embed/'. $entity->embedcode . '" frameborder="0" allowfullscreen></iframe>',
      );
    }
    else {
      $build['embedcode'] = array(
        '#type' => 'markup',
        '#markup' => '<p><a href="http://www.youtube.com/watch?v=' . $entity->embedcode . '">Link to YouTube video</a></p>',
      ); 
    }

    return $build;
  }
