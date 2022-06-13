<?php
//Service - an object that does work for me 
//Service Container - An object that has array of services

//1. Create a Service
//Folder Structure - modulename/src/servicename/classname.php
                    //dino_roar/src/Jurassic/RoarGenerator.php
namespace Drupal\modulename\servicefoldername;

class ServicenameGenerator {
    public function getRoar($length){
        return $length;
    }
}

//2. using the Service
//Folder Structure - modulename/src/Controller/NameController.php
                    //dino_roar/src/Controller/RoarController.php
namespace Drupal\modulename\Controller;
use Drupal\modulename\servicefoldername\ServicenameGenerator;//1
use Symfony\Component\HttpFoundation\Response;

class NameController 
{
    public function functionname($variablefromurl){
        $servicenameGerator = new ServicenameGenerator();//2
        $roar = $servicenameGerator->getRoar($variablefromurl);
        return new Response($roar);
    }
   
}



//3. Teach Drupal core about this service
//Folder Structure - modulename/services.yml
                //dino_roar/dino_roar.routing.yml
                //core services - core.services.yml
services:
    modulename.servicename_generator: //nickname of the service - will appear in drupal container:debug | grep enter_service_name
        class Drupal\modulename\servicefoldername\ServicenameGenerator
//Display list of services from terminal - your services is now viewable in terminal console 
//$ drupal container:debug 
https://codimth.com/blog/web/drupal/how-create-drupal-8-custom-service

//4. How to Get a other Services in the ControllerBase - Dependency Injection
namespace Drupal\modulename\Controller;
use Drupal\Core\Controller\ControllerBase; //4.1 Get the ControllerBase which contains services
use Drupal\modulename\servicefoldername\ServicenameGenerator;

class NameController extends ControllerBase
{   
    private $somevar;
    //4.3 when the contruct is called, this willrun the $somevar
    public function __contruct(ServicenameGenerator $somevar){
        //private $somevar
        $this->somevar = $somevar;
    }
    //4.4 gets invoke, when used
     public function functionname($variablefromurl){
        $roar = $this->somevar->getRoar($variablefromurl);
        return new Response($roar);
    }
    //4.2 Instantiate the container                     
    public static function create(ContainerInterface $container) {
     $somevar = $container->get('modulename.servicename_generator');
     return new static($somevar);
    }
   
}
///------------------------------------------
//Using a service in your controller
//$ drupal container:debug | grep log

namespace Drupal\modulename\Controller;
use Drupal\Core\Controller\ControllerBase;
use Drupal\modulename\servicefoldername\ServicenameGenerator;
use Drupal\Core\Logger\LoggerChannelFactoryInterface; //2

class NameController extends ControllerBase
{   
    private $somevar;
    private $somevarFactory; //4 use it when ready

    public function __contruct(ServicenameGenerator $somevar, LoggerChannelFactoryInterface $somevarFactory){ //3 LoggerChannelFactoryInterface 
        $this->somevar = $somevar;
        $this->somevarFactory = $somevarFactory; //3
    }

     public function functionname($variablefromurl){
       
       // $roar = $this->somevar->getRoar($variablefromurl);
       // $this->somevarFactory->get('default')->debug($roar); // this logs it into localhost/admin/dblog

        //keyValue is a service/function from ControllerBase - to see all methods and variabe try dump($this)
        $keyValueStore = $this->keyValue('somestring'); //'somestring' is just whatever string you set
        // $keyValueStore->set('roar_string',  $roar); //This is how to set
        $roar = $keyValueStore->get('roar_string'); //This is how to get
        return new Response($roar);
    }

    public static function create(ContainerInterface $container) {
     $somevar = $container->get('modulename.servicename_generator');
     $somevarFactory = $container->get('logger.factory'); //1 get the service from the container
     return new static($somevar, $somevarFactory);
    }
   
}

///------------------------------------------
//using service from container/controller in your service
//$ drupal container:debug | grep keyvalue
//Folder Structure - modulename/src/servicename/classname.php
namespace Drupal\modulename\servicefoldername;
use Drupal\Core\KeyValueStore\KeyValueFactoryInterface; //Step 1. find the service $ drupal container:debug | grep servicename
class ServicenameGenerator {
    
    private $keyValueFactory;
    //Step 3: call the service interface
    public function __contruct(KeyValueFactoryInterface $keyValueFactory){
        //Step 4: Use the variable object
        $this->keyValueFactory = $keyValueFactory;
    }
    public function getRoar($length){
        $key = 'roar_'.$length;
        //Step 5. Now you can use the service
        $store = $this->keyValueFactory->get('somestring'); //$keyValueStore = $this->keyValue('somestring');  this comes from controller
        if ($store->has($key)){
            return $store->get($key);
        }
        $string = $length;
        $store->set($key,$string);

        return $string;
    }
}
//Folder Structure - modulename/services.yml
services:
    modulename.servicename_generator:
        class Drupal\modulename\servicefoldername\ServicenameGenerator
        arguments:    //Step 2. pass an argument to use another service using @servicename - use  $ drupal container:debug to see the name
            - '@keyvalue'  

///------------------------------------------

//Add custom parameter to service
namespace Drupal\modulename\servicefoldername;
use Drupal\Core\KeyValueStore\KeyValueFactoryInterface;
class ServicenameGenerator {
    
    private $keyValueFactory;
    private $useCache;

    public function __contruct(KeyValueFactoryInterface $keyValueFactory, $useCache){ //1 $useCache 
        $this->keyValueFactory = $keyValueFactory;
        $this->useCache = $useCache; //use the $useCache to instantiate
    }
    public function getRoar($length){
        $key = 'roar_'.$length;
        $store = $this->keyValueFactory->get('somestring');
        if ($this->useCache && $store->has($key)){
            return $store->get($key);
        }
        $string = $length;

        if ($this->useCache){
            $store->set($key,$string); 
        }

        return $string;
    }
}

//Folder Structure - modulename/services.yml
parameters:
    modulename.use_keyvalue_cache: true //Step 2 //the purpose is so that you can override this in your settings.local.php loads development.services.yml or settings.php loads default.services.yml 

services:
    modulename.servicename_generator: //dino_roar/src/Jurassic/RoarGenerator.php
        class: Drupal\modulename\servicefoldername\ServicenameGenerator //where the argument pass to what class dino_roar/src/Jurassic/RoarGenerator.php
        arguments: 
            - '@keyvalue'
            - %modulename.use_keyvalue_cache% //Step 3

///------------------------------------------

//Override Drupal Core Services 
//settings.local.php loads development.services.yml 
parameters:
    modulename.use_keyvalue_cache: false // copy parameters from dino_roar/dino_roar.services.yml and paste it (sites/default/default.services.yml - change this to services.yml) to override
services:
  cache.backend.null:
    class: Drupal\Core\Cache\NullBackendFactory

//Folder Structure - /drupal-8/core/core.services.yml - most service are coming from this file
//Folder Structure - /drupal-8/sites/default/default.services.yml
//development.services.yml - to override /drupal-8/core/core.services.yml and default.services.yml services settings during development 
/*
services:
  cache.backend.null:
    class: Drupal\Core\Cache\NullBackendFactory
parameters:
  twig.config:
    debug : true
    auto_reload: true
    cache: false
*/


// $settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml'; This file give powers to override service and it's parameters' comment this out when in production