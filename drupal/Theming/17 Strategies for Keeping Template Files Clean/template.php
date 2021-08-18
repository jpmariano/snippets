<?php 
//hook_theme - theme resistry; you can see it by turning on the theme registry in the development block - named themed registry
//$existing -  override purpose, $type - tell if they are the actual theme being called or a parent theme, $theme: The actual name of theme, module, etc. that is being being processed., $path: The directory path of the theme or module, so that it doesn't need to be looked up.
function yourthemename_theme($existing, $type, $theme, $path) {
  return array(
    //adding a new form in theme registry, it relates to the form function
    'comment_form' => array(
      //The theme that is going to render is the form
      'render element' => 'form',
      //comment-form.tpl.php
      'template' => 'comment-form',
    ),
  );
}

//After Registering the comment form, you can now use it
function yourtheme_comment_form($variables){
	kpr($variables); //to see form array
}



function yourtheme_preprocess_comment_form($variables){
	$variables['author_field'] = drupal_render($variables['form']['author']);
	$variables['subject_field'] = drupal_render($variables['form']['subject']);
	hide($variables['form']['comment_body']['und'][0]['format']);
	$variables['everything_else'] = drupal_render_children($variables['form']);
}
