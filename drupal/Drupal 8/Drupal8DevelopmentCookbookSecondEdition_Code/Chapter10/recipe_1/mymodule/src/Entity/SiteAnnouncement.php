<?php

namespace Drupal\mymodule\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;
#Step 4
# Entities use annotation documentation blocks. We will start our annotation block by providing the entity's ID, label, configuration prefix, and configuration export key names
#id is the internal machine name identifier for the entity type
#label is the human-readable version
#config_prefix matches with how we defined our schema with mymodule.announcement in Chapter10/recipe_1/mymodule/config/schema/mymodule.schema.yml
#entity keys definition tells Drupal which attributes represent our identifiers and labels Chapter10/recipe_1/mymodule/config/schema/mymodule.schema.yml
#config_export, we are telling the configuration management system what properties are to be exportable when exporting our entity
#handlers to our entity. We will define the class that will display the available entity entries and the forms to work with our entity:
  #list_builder class will be created to show you a table of our entities.
  #form array provides classes for forms to be used when creating, editing, or deleting our configuration entity
#links routes for our delete, edit, and collection (list) pages
#Read more page 236
/**
 * @ConfigEntityType(
 *   id ="announcement",
 *   label = @Translation("Site Announcement"),
 *   handlers = {
 *     "list_builder" = "Drupal\mymodule\SiteAnnouncementListBuilder",
 *     "form" = {
 *       "default" = "Drupal\mymodule\SiteAnnouncementForm",
 *       "add" = "Drupal\mymodule\SiteAnnouncementForm",
 *       "edit" = "Drupal\mymodule\SiteAnnouncementForm",
 *       "delete" = "Drupal\Core\Entity\EntityDeleteForm"
 *     }
 *   },
 *   config_prefix = "announcement",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label"
 *   },
 *   links = {
 *     "delete-form" = "/admin/config/system/site-announcements/manage/{announcement}/delete",
 *     "edit-form" = "/admin/config/system/site-announcements/manage/{announcement}",
 *     "collection" = "/admin/config/system/site-announcements",
 *   },
 *   config_export = {
 *     "id",
 *     "label",
 *     "message",
 *   }
 * )
 */
#Step 3
class SiteAnnouncement extends ConfigEntityBase implements SiteAnnouncementInterface {

  /**
   * The announcement's message.
   *
   * @var string
   */
  protected $message;

  /**
   * {@inheritdoc}
   */
  public function getMessage() {
    return $this->message;
  }


}
