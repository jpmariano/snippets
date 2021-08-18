<?php
/**
 * @file
 * Returns the HTML for the basic html structure of a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728208
 */
?><!DOCTYPE html>
<html <?php if($html_attributes): print $html_attributes; endif; print $rdf_namespaces; ?>>
<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <meta http-equiv="cleartype" content="on">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=9">
  <?php print $styles; ?>
  <?php print $scripts; ?>
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
<input type="hidden" value="" id="pagevisited">
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>