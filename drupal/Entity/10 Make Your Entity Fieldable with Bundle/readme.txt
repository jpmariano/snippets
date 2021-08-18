videoentity.module
  'fieldable' => TRUE,
     'bundles' => array(
        'video' => array(
          'label' => t('Video'),
          'admin' => array(
            'path' => 'admin/videoentity',
            'access arguments' => array('administer video'),
          ),
        ),
      ),
 
videoentity.admin.inc
field_attach_form('video', $video, $form, $form_state);