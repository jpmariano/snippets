<?php
//$wildcard -- is the %
function menu_magic_extra($wildcard) {
  $content = array(
    '#type' => 'markup',
    //%wildcard - acts as a variable that  pulls the array $wildcard (yoururl.com/magic/%)
    '#markup' => '<p>'. t('The wildcard contains the value "%wildcard".', array('%wildcard' => $wildcard)) . '</p>',
  );
  return $content;
}