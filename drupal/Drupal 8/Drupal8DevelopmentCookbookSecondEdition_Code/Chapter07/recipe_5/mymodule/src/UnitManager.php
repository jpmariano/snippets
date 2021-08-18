<?php
/**
* @file
* Contains \Drupal\mymodule\UnitManager.
*/
namespace Drupal\mymodule;
use Drupal\Core\Plugin\DefaultPluginManager;
use Drupal\Core\Cache\CacheBackendInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
class UnitManager extends DefaultPluginManager {
    /**
    * Default values for each unit plugin.
    *
    * @var array
    */
    protected $defaults = [
        'id' => '',
        'label' => '',
        'unit' => '',
        'factor' => 0.00,
        'type' => '',
        'class' => 'Drupal\mymodule\Unit',
    ];
    /**
    * Constructs a new \Drupal\mymodule\UnitManager object.
    *
    * @param \Drupal\Core\Cache\CacheBackendInterface $cache_
    backend
    * Cache backend instance to use.
    * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_
    handler
    * The module handler to invoke the alter hook with.
    */
    /*We override the constructor so that we can specify a specific cache key. This allows
    plugin definitions to be cached and cleared properly; otherwise, our plugin manager
    will continuously read the disk to find plugins.*/
    public function __construct(CacheBackendInterface
        $cache_backend, ModuleHandlerInterface $module_handler) {
        $this->moduleHandler = $module_handler;
        $this->alterInfo('physical_unit'); //allow you to have hook_physical_unit_alter in .module
        $this->setCacheBackend($cache_backend,
        'physical_unit_plugins');
    }

    /**
    * {@inheritdoc}
    */
    /*
    The default plugin manager implementation supports an annotated plugin discovery,
    such as field types, field widgets, and field formatters. By setting the discovery property
    to YamlDiscovery, we are telling Drupal to look for a *.units.yml file in all the
    module directories.*/
    protected function getDiscovery() {
        if (!isset($this->discovery)) {
        
        $this->discovery = new YamlDiscovery('units', $this->moduleHandler->getModuleDirectories());
        
        $this->discovery = new ContainerDerivativeDiscoveryDecorator
        ($this->discovery);
        }
        return $this->discovery;
    }

    

    
}