<?php
/* Keep the same function hook along with your theme name; do any changes within the function; */
function YOURTHEME_breadcrumb($variables) {
  $breadcrumb = $variables['breadcrumb'];

  if (!empty($breadcrumb)) {
      $crumbs = '<ul class="breadcrumbs">';

      foreach($breadcrumb as $value) {
           $crumbs .= '<li class="changes">'.$value.'</li>';
      }
      $crumbs .= '</ul>';
    }
      return $crumbs;
  }
