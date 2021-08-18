<?php

function hook_page_alter(&$page){
	//kpr($page);
	if (arg(0) == 'node' && is_numeric(arg(1))){
		$nid = arg(1);
		$image = $page['content']['system)main']['nodes'][$nid]['field_image'];
		//move the image to $page['sidebar_first'] 
		array_unshift($page['sidebar_first'], array('image' => $image));
		//remove from the old location
		unset( $page['content']['system)main']['nodes'][$nid]['field_image']);
	}
};

