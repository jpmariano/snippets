<?php

namespace Drupal\mymodule\Plugin\Field\FieldType; //\Drupal\Core\Field\FieldTypePluginManager locates this namespace
//The Plugin Manager has the \Drupal\Core\Field\FieldItemInterface implemented 
//Where you extend
use Drupal\Core\Field\FieldItemBase; //https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21FieldItemBase.php/class/FieldItemBase/8.5.x
//Use by the argument
use Drupal\Core\Field\FieldStorageDefinitionInterface;
//DataDefinition class used inside propertyDefinitions
use Drupal\Core\TypedData\DataDefinition;

/**
 * Plugin implementation of the 'realname' field type.
 *
 * @FieldType( //Tells Drupal that this is a Field Type
 *   id = "realname", //This is the plugin's machine name
 *   label = @Translation("Real name"), //Label: This is the human-readable name for the field
 *   description = @Translation("This field stores a first and last name."), //This is the human-readable description of the field
 *   category = @Translation("General"), //This is the category where the field shows up in the user interface
 *   default_widget = "string_textfield", //This is the default form widget to be used for editing
 *   default_formatter = "string" //This is the default formatter with which you can display the field
 * )
 */
class RealName extends FieldItemBase {

  /**
   * {@inheritdoc}
   */
  public static function schema(\Drupal\Core\Field\FieldStorageDefinitionInterface $field_definition) {
    return [
      'columns' => [
        'first_name' => [
          'description' => 'First name.',
          'type' => 'varchar',
          'length' => '255',
          'not null' => TRUE,
          'default' => '',
        ],
        'last_name' => [
          'description' => 'Last name.',
          'type' => 'varchar',
          'length' => '255',
          'not null' => TRUE,
          'default' => '',
        ],
      ],
      'indexes' => [
        'first_name' => ['first_name'],
        'last_name' => ['last_name'],
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
    //DataDefinition comes from Typed Data API - API allow you to interact with the actual data, it also provides means of fetching more information, or metadata, about the actual data.
    $properties['first_name'] = DataDefinition::create('string')->setLabel(t('First name'));
    $properties['last_name'] = DataDefinition::create('string')->setLabel(t('Last name'));

    return $properties;
  }

  /**
  * Implements hook_field_info_alter().
  */
  /*
  function mymodule_field_info_alter(&$info) {
    $info['email']['label'] = t('E-mail address');
  }*/

}
