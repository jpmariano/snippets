<?php

namespace Drupal\mymodule\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * @Block(
 *   id = "copyright_block",
 *   admin_label = @Translation("Copyright"),
 *   category = @Translation("Custom")
 * )
 */
class Copyright extends BlockBase { //https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Block%21BlockBase.php/class/BlockBase/8.5.x
  /**
   * {@inheritdoc}
   */
  public function build() {
    $date = new \DateTime();
    return [
      '#markup' => t('Copyright @year&copy; My Company', [
          '@year' => $date->format('Y'),
      ]),
    ];
  }
}
