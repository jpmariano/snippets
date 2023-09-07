Creating a bundle (this is like a type of node) for a content entity type 
Sidenote: Bundles are most utilized in the configured field levels via the Field and Field UI

Step 1: schema/mymodule.schema.yml
Step 2: src/Entity/MessageTypeInterface.php
Step 3: src/Entity/MessageType.php 
- In most use cases, the bundle entity class can be an empty class that does not provide
any properties or methods. If a bundle provides additional attributes in its schema
definition, they would also be provided here, like any other configuration entity.
- Entities need to be annotated
    - ConfigEntityType plugin. 
    - id is the internal machine name identifier for the entity type
    - label is the human-readable version. 
    - config_prefix matches with how we defined our schema with mymodule.message_type. 
    - entity_keys  definition tells Drupal which attributes represent our identifiers and labels
    - config_export teslls the configuration management system what properties are to be exported when exporting our entity
    - handlers array specifies classes that provide the interaction functionality with our entity. 
    - list_builder class will be created to show you a table of our entities
    - form  provides classes for forms to be used when creating, editing, or deleting   our configuration entity
    - route_provider, to dynamically generate  our canonical (view), edit, and delete routes
    - admin_permission - to define an administration permission for the entity
Step 4: mymodule/src/Entity/Message.php
    - modify our content entity to use the bundle configuration entity 
        - bundle_entity_type - specifies the entity type used as the bundle
        - field_ui_base_route - pointed to the bundle's main edit form, it will generate the Manage Fields, Manage Form Display, and Manage Display tabs on the bundles
        - bundle - instructs Drupal which field definition to use in order to identify the entity's bundle
    - $fields['type'] = BaseFieldDefinition
        - to provide the type field that we defined to represent the bundle entity key
        - field that identifies the bundle will be typed as an entity reference. This allows the value to act as a foreign key to the bundle's base table
Step 5: mymodule.routing.yml 
Step 6: links.action.yml
Step 7: mymodule.permissions.yml 
    - MessagePermissions class will add create, view, update, and delete permissions to our entities
    - MessageAccessControlHandler - To utilize the dynamic permissions and add it to the annotation in Message.php handlress under access
