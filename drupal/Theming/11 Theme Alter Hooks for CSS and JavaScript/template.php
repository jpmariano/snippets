<?php

function yourtheme_css_alter(&$css) {
	//kpr($css);
	unset($css['modules/system/system.menus.css']);
};

function yourtheme_js_alter(&$javascript) {
	//kpr($javascript);
	unset($css['modules/system/system.menus.js']);
};