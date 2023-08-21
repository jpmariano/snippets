<?php
#Step 2 It is best practice to provide an interface for entities.
namespace Drupal\mymodule\Entity;

use Drupal\Core\Config\Entity\ConfigEntityInterface;

interface SiteAnnouncementInterface extends ConfigEntityInterface {

  /**
   * Gets the message value.
   *
   * @return string
   */
  public function getMessage();

}
