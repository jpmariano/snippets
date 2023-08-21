<?php

namespace Drupal\mymodule\Entity;

use Drupal\Core\Entity\ContentEntityBase;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Field\BaseFieldDefinition;

# Entities use annotation documentation blocks. We will start our annotation block by providing the entity's ID, label, configuration prefix, and configuration export key names
#id is the internal machine name identifier for the entity type
#label is the human-readable version
#entity_keys tells Drupal which attributes represent our identifier and label
#base_table defines the database table in which the entity will be stored
#fieldable allows custom fields to be configured through the Field UI module.
#handlers to our entity. We will define the class that will display the available entity entries and the forms to work with our entity:
  #list_builder class will be created to show you a table of our entities.
  #form array provides classes for forms to be used when creating, editing, or deleting our configuration entity
#route_provider, to dynamically generate our canonical (view), edit, and delete routes:
#links routes for our delete, edit, and collection (list) pages
/**
 * Defines the message entity class.
 *
 * @ContentEntityType(
 *   id = "message",
 *   label = @Translation("Message"),
 *   handlers = {
 *     "list_builder" = "Drupal\mymodule\MessageListBuilder",
 *     "form" = {
 *       "default" = "Drupal\Core\Entity\EntityForm",
 *       "add" = "Drupal\Core\Entity\EntityForm",
 *       "edit" = "Drupal\Core\Entity\EntityForm",
 *       "delete" = "Drupal\Core\Entity\ContentEntityDeleteForm",
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\Core\Entity\Routing\DefaultHtmlRouteProvider",
 *     },
 *   },
 *   admin_permission = "administer message",
 *   base_table = "message",
 *   fieldable = TRUE,
 *   entity_keys = {
 *     "id" = "message_id",
 *     "label" = "title",
 *     "langcode" = "langcode",
 *     "uuid" = "uuid"
 *   },
 *  links = {
 *    "canonical" = "/messages/{message}",
 *    "add-form" = "/messages/add",
 *    "edit-form" = "/messages/{message}/edit",
 *    "delete-form" = "/messages/{message}/delete",
 *    "collection" = "/admin/content/messages"
 *   },
 * )
 */
#ContentEntityBase  needs to return an array of BaseFieldDefinitions for typed data definitions. This includes the keys provided in the entity_keys value in our entity's annotation along with any specific fields for our implementation.
class Message extends ContentEntityBase implements MessageInterface {

  /**
   * {@inheritdoc}
   */
  #provides a wrapper around the defined base field's value and returns it.
  public function getMessage() {
    return $this->get('content')->value;
  }

  /**
   * {@inheritdoc}
   */
  #will provide our field definitions to the entity's base table
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    $fields = parent::baseFieldDefinitions($entity_type);

    $fields['title'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Title'))
      ->setRequired(TRUE)
      ->setTranslatable(TRUE)
      ->setRevisionable(TRUE)
      ->setSetting('max_length', 255)
      ->setDisplayOptions('view', array(
        'label' => 'hidden',
        'type' => 'string',
        'weight' => -5,
      ))
      ->setDisplayOptions('form', array(
        'type' => 'string_textfield',
        'weight' => -5,
      ))
      ->setDisplayConfigurable('form', TRUE);
    #hold the actual text for the message
    $fields['content'] = BaseFieldDefinition::create('text_long')
      ->setLabel(t('Content'))
      ->setDescription(t('Content of the message'))
      ->setTranslatable(TRUE)
      ->setDisplayOptions('view', array(
        'label' => 'hidden',
        'type' => 'text_default',
        'weight' => 0,
      ))
      ->setDisplayConfigurable('view', TRUE)
      ->setDisplayOptions('form', array(
        'type' => 'text_textfield',
        'weight' => 0,
      ))
      ->setDisplayConfigurable('form', TRUE);

    return $fields;
  }
}
