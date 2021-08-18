<?php
/**
 * @file
 * Contains the theme's functions to manipulate Drupal's default markup.
 *
 * A QUICK OVERVIEW OF DRUPAL THEMING
 *
 *   The default HTML for all of Drupal's markup is specified by its modules.
 *   For example, the comment.module provides the default HTML markup and CSS
 *   styling that is wrapped around each comment. Fortunately, each piece of
 *   markup can optionally be overridden by the theme.
 *
 *   Drupal deals with each chunk of content using a "theme hook". The raw
 *   content is placed in PHP variables and passed through the theme hook, which
 *   can either be a template file (which you should already be familiary with)
 *   or a theme function. For example, the "comment" theme hook is implemented
 *   with a comment.tpl.php template file, but the "breadcrumb" theme hooks is
 *   implemented with a theme_breadcrumb() theme function. Regardless if the
 *   theme hook uses a template file or theme function, the template or function
 *   does the same kind of work; it takes the PHP variables passed to it and
 *   wraps the raw content with the desired HTML markup.
 *
 *   Most theme hooks are implemented with template files. Theme hooks that use
 *   theme functions do so for performance reasons - theme_field() is faster
 *   than a field.tpl.php - or for legacy reasons - theme_breadcrumb() has "been
 *   that way forever."
 *
 *   The variables used by theme functions or template files come from a handful
 *   of sources:
 *   - the contents of other theme hooks that have already been rendered into
 *     HTML. For example, the HTML from theme_breadcrumb() is put into the
 *     $breadcrumb variable of the page.tpl.php template file.
 *   - raw data provided directly by a module (often pulled from a database)
 *   - a "render element" provided directly by a module. A render element is a
 *     nested PHP array which contains both content and meta data with hints on
 *     how the content should be rendered. If a variable in a template file is a
 *     render element, it needs to be rendered with the render() function and
 *     then printed using:
 *       <?php print render($variable); ?>
 *
 * ABOUT THE TEMPLATE.PHP FILE
 *
 *   The template.php file is one of the most useful files when creating or
 *   modifying Drupal themes. With this file you can do three things:
 *   - Modify any theme hooks variables or add your own variables, using
 *     preprocess or process functions.
 *   - Override any theme function. That is, replace a module's default theme
 *     function with one you write.
 *   - Call hook_*_alter() functions which allow you to alter various parts of
 *     Drupal's internals, including the render elements in forms. The most
 *     useful of which include hook_form_alter(), hook_form_FORM_ID_alter(),
 *     and hook_page_alter(). See api.drupal.org for more information about
 *     _alter functions.
 *
 * OVERRIDING THEME FUNCTIONS
 *
 *   If a theme hook uses a theme function, Drupal will use the default theme
 *   function unless your theme overrides it. To override a theme function, you
 *   have to first find the theme function that generates the output. (The
 *   api.drupal.org website is a good place to find which file contains which
 *   function.) Then you can copy the original function in its entirety and
 *   paste it in this template.php file, changing the prefix from theme_ to
 *   STARTERKIT_. For example:
 *
 *     original, found in modules/field/field.module: theme_field()
 *     theme override, found in template.php: STARTERKIT_field()
 *
 *   where STARTERKIT is the name of your sub-theme. For example, the
 *   zen_classic theme would define a zen_classic_field() function.
 *
 *   Note that base themes can also override theme functions. And those
 *   overrides will be used by sub-themes unless the sub-theme chooses to
 *   override again.
 *
 *   Zen core only overrides one theme function. If you wish to override it, you
 *   should first look at how Zen core implements this function:
 *     theme_breadcrumbs()      in zen/template.php
 *
 *   For more information, please visit the Theme Developer's Guide on
 *   Drupal.org: http://drupal.org/node/173880
 *
 * CREATE OR MODIFY VARIABLES FOR YOUR THEME
 *
 *   Each tpl.php template file has several variables which hold various pieces
 *   of content. You can modify those variables (or add new ones) before they
 *   are used in the template files by using preprocess functions.
 *
 *   This makes THEME_preprocess_HOOK() functions the most powerful functions
 *   available to themers.
 *
 *   It works by having one preprocess function for each template file or its
 *   derivatives (called theme hook suggestions). For example:
 *     THEME_preprocess_page    alters the variables for page.tpl.php
 *     THEME_preprocess_node    alters the variables for node.tpl.php or
 *                              for node--forum.tpl.php
 *     THEME_preprocess_comment alters the variables for comment.tpl.php
 *     THEME_preprocess_block   alters the variables for block.tpl.php
 *
 *   For more information on preprocess functions and theme hook suggestions,
 *   please visit the Theme Developer's Guide on Drupal.org:
 *   http://drupal.org/node/223440 and http://drupal.org/node/1089656
 */


/**
 * Override or insert variables into the maintenance page template.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("maintenance_page" in this case.)
 */
/* -- Delete this line if you want to use this function
function STARTERKIT_preprocess_maintenance_page(&$variables, $hook) {
  // When a variable is manipulated or added in preprocess_html or
  // preprocess_page, that same work is probably needed for the maintenance page
  // as well, so we can just re-use those functions to do that work here.
  STARTERKIT_preprocess_html($variables, $hook);
  STARTERKIT_preprocess_page($variables, $hook);
}
// */

/**
 * Override or insert variables into the html templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("html" in this case.)
 */
/* -- Delete this line if you want to use this function
function STARTERKIT_preprocess_html(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');

  // The body tag's classes are controlled by the $classes_array variable. To
  // remove a class from $classes_array, use array_diff().
  //$variables['classes_array'] = array_diff($variables['classes_array'], array('class-to-remove'));
}
// */

/**
 * Override or insert variables into the page templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("page" in this case.)
 */
/* -- Delete this line if you want to use this function
function STARTERKIT_preprocess_page(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');
}
// */

/**
 * Override or insert variables into the node templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("node" in this case.)
 */
/* -- Delete this line if you want to use this function
function STARTERKIT_preprocess_node(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');

  // Optionally, run node-type-specific preprocess functions, like
  // STARTERKIT_preprocess_node_page() or STARTERKIT_preprocess_node_story().
  $function = __FUNCTION__ . '_' . $variables['node']->type;
  if (function_exists($function)) {
    $function($variables, $hook);
  }
}
// */

/**
 * Override or insert variables into the comment templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("comment" in this case.)
 */
/* -- Delete this line if you want to use this function
function STARTERKIT_preprocess_comment(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');
}
// */

/**
 * Override or insert variables into the region templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("region" in this case.)
 */
/* -- Delete this line if you want to use this function
function STARTERKIT_preprocess_region(&$variables, $hook) {
  // Don't use Zen's region--sidebar.tpl.php template for sidebars.
  if (strpos($variables['region'], 'sidebar_') === 0) {
    $variables['theme_hook_suggestions'] = array_diff($variables['theme_hook_suggestions'], array('region__sidebar'));
  }
}
// */

/**
 * Override or insert variables into the block templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */
/* -- Delete this line if you want to use this function
function STARTERKIT_preprocess_block(&$variables, $hook) {
  // Add a count to all the blocks in the region.
  $variables['classes_array'][] = 'count-' . $variables['block_id'];
}
// */

/*Hook menu for alter menu*/
function howard_menu_tree__main_menu($variables) {
  return '<ul class="menu_level1">' . $variables['tree'] . '</ul>';
}
/*Hook menu for alter menu*/
function howard_menu_tree__menu_footer_menu($variables) {
  return '<ul class="footer_left_menu">' . $variables['tree'] . '</ul>';
}


/**
 * Implements theme_menu_link().
 */
 /*Hook menu for alter menu*/
function howard_menu_link(array $variables) {
  $element = $variables['element'];
  $sub_menu = '';
  if ($element['#below']) {
    // Wrap in dropdown-menu.
    unset($element['#below']['#theme_wrappers']);
	if($element['#theme'] == "menu_link__main_menu") {
	     $depth = $element['#original_link']['depth'] + 1;
	    $sub_menu = '<ul class="menu_level'.$depth.'">' . drupal_render($element['#below']) . '</ul>';
	    }
	else{
		 $sub_menu = '<ul class="menu_level">' . drupal_render($element['#below']) . '</ul>';
	}
  }
  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  return '<li>' . $output . $sub_menu . "</li>\n";
}
/*Hook Breadcrumb for alter breadcrumb structure*/
function howard_breadcrumb($variables) {
  $breadcrumb = $variables['breadcrumb'];
 $breadcrumb_count = count($breadcrumb);
 //add News and event breadcrumb for new and events node page
	  if(arg(0) == 'node'){
	    $nid = is_numeric(arg(1))?arg(1):'';
			if(is_numeric($nid)){
				$node = node_load($nid);
				if($node->type == 'event'){
					 $breadcrumb[] = l('News & Events', 'news-and-events');
			        $breadcrumb[] = l('Events', 'events');
					}	
				if($node->type == 'press_release'){
						 $breadcrumb[] = l('News & Events', 'news-and-events');
				        $breadcrumb[] = l('News', 'news');
						}	
					} 	
	 	}
 $breadcrumb[] = "<a>".drupal_get_title()."</a>";
 $theme_path = drupal_get_path('theme', variable_get('theme_default', NULL));
 $home = array('<a href="/"><img src="'.base_path() . path_to_theme() .'/images/breadcrumb.png"></a>');
 //array_shift($breadcrumb);
 $breadcrumb  = array_replace($breadcrumb, $home);
     if (!empty($breadcrumb)) {      
        return '<div class="row"><div class="col-xs-12"><div class="breadcrumb"><ul><li>'. implode('</li><li> > ',$breadcrumb) .'</li></ul></div></div></div>';
    }
}


/**
 * Override or insert variables into the html template.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered. This is usually "html"
 *   this function to have consistent variables.
 */
 
function howard_preprocess(&$variables) {
	if(strtolower(arg(0)) == 'node' && is_numeric(arg(1))){
  		$node = node_load(arg(1));
		if(isset($node -> nid)){
			if($node -> type == 'page'){
				//Set Variables for basic oage node form
				$variables['testVar'] = $node -> type;
				$variables['hideShareIcons'] = !empty($node -> field_hide_share['und'][0]['value']) ? $node -> field_hide_share['und'][0]['value'] : 0;
				$variables['hidePageTitle'] = !empty($node -> field_hide_title['und'][0]['value']) ? $node -> field_hide_title['und'][0]['value'] : 0;
				$variables['hideSideMenu'] = !empty($node -> field_hide_sidemenu['und'][0]['value']) ? $node -> field_hide_sidemenu['und'][0]['value'] : 0;
				$altImgUri = !empty($node -> field_image['und'][0]['uri']) ? $node -> field_image['und'][0]['uri'] : '';
				if(!empty($altImgUri)){
					$altImgUrl = file_create_url($altImgUri);
					$imgVars = array(
				      'path' => $altImgUrl, 
				      'alt' => $node -> title,
				      'title' => $node -> title,				      
				      //'attributes' => array('class' => 'some-img', 'id' => 'my-img'),
				  	);
					$variables['altSideImg'] = theme('image', $imgVars);
				}				
			}
		}
	}
	$pathAlias = drupal_get_path_alias($_GET['q']);
	$blocktheme_vars = blocktheme_get_vars();
	$variables['socialShareClass'] = (!empty($blocktheme_vars['social_share-social_share'][$pathAlias]) && trim($blocktheme_vars['social_share-social_share'][$pathAlias]) == 'right') ? 'share_right' : '';
	$variables['stripedBG'] = (!empty($blocktheme_vars['system-main'][$pathAlias.':stripedBG']) && trim($blocktheme_vars['system-main'][$pathAlias.':stripedBG']) == 1) ? 'striped-bg' : '';
	/*if($pathAlias == 'news-and-events/news' || $pathAlias == 'news-and-events/events'){
		print($blocktheme_vars['social_share-social_share'][$pathAlias].'<br/>');
		print($pathAlias.'---'.$variables['socialShareClass']); echo"<pre>"; print_r($blocktheme_vars['social_share-social_share']); echo"</pre>"; die;	
	}*/
	
//	$variables['stripedBG'] = (!empty($blocktheme_vars['system-main'][$pathAlias]) && $blocktheme_vars['system-main'][$pathAlias] == 1) : 'striped-bg' : '';
//	echo "<pre>"; print_r($blocktheme_vars); die;	
}
 
function howard_preprocess_html(&$variables, $hook) {	
	$variables['base_path'] = base_path();
	// Attributes for html element.
	$variables['html_attributes_array'] = array(
	    'lang' => $variables['language']->language,
	    'dir' => $variables['language']->dir,
	);
	$path = drupal_get_path_alias($_GET['q']);
  	$aliases = explode('/', $path);

	foreach($aliases as $alias) {
	    $variables['classes_array'][] = drupal_clean_css_identifier($alias);
	} 
	//echo "<pre>"; print_r($variables); die;
}

/**
 * Override or insert variables into the html templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("html" in this case.)
 */
function howard_process_html(&$variables, $hook) {
  // Flatten out html_attributes.
  $variables['html_attributes'] = drupal_attributes($variables['html_attributes_array']);
}

function howard_preprocess_page(&$vars) {
	
  if(isset($vars['page']['content']['system_main']['no_content'])) {
    unset($vars['page']['content']['system_main']['no_content']);
  }
	
	$header = drupal_get_http_header("status"); 
	
  if($header == "404 Not Found") {     
    $vars['theme_hook_suggestions'][] = 'page__404';
  }
	
  if($header == "403 Forbidden") {     
    $vars['theme_hook_suggestions'][] = 'page__403';
  }
	
	 if (isset($vars['node'])) {
    // If the node type is "blog" the template suggestion will be "page--blog.tpl.php".
    $vars['theme_hook_suggestions'][] = 'page__'. str_replace('_', '--', $vars['node']->type);
  }
}
function howard_page_alter($page) {
  // Add meta tag for viewport, for easier responsive theme design.
  $viewport = array(
    '#type' => 'html_tag',
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'viewport',
      'content' => 'width=device-width, initial-scale=1',
    ),
  );
  drupal_add_html_head($viewport, 'viewport');
}
 function howard_html_head_alter(&$head_elements) {
  $head_elements['system_meta_content_type']['#attributes'] = array(
    'charset' => 'utf-8'
  );
}

function howard_block_view_alter(&$data, $block) {
 if (isset($block->css_class) && $block->css_class == 'col-xs-12') {
    if (is_array($data['content'])) {
      $data['content']['#prefix'] = '<div class="inner_content"><div class="row">';
      
     // $data['content']['#prefix'] .= '<div class="divlayerbow ' . $block->css_class . '"></div>';
      $data['content']['#suffix'] = '</div></div>';
    } else {
      $data['content'] = '<div class="divwrapboat ' . $block->css_class . '">';
      $data['content'] .= '<div class="divlayerbow ' . $block->css_class .'"></div>';
      $data['content'] .=  $data['content'];
      $data['content'] .= '<div class="divlayerstern ' . $block->css_class .'"></div></div>';
    }
 }
}

