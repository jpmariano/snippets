<?php

namespace Drupal\dino_roar\Controller;

use Drupal\Core\Controller\ControllerBase; //Required for dependency Injection
use Drupal\Core\Logger\LoggerChannelFactoryInterface;
use Drupal\dino_roar\Jurassic\RoarGenerator; 
use Symfony\Component\DependencyInjection\ContainerInterface; //Required for dependency Injection
use Symfony\Component\HttpFoundation\Response;

class RoarController extends ControllerBase //1. Step 1 Extend the controllerbase 
{
    /**
     * @var RoarGenerator
     */
    private $roarGenerator; //6. you assign the $roarGenerator here 

    /**
     * @var LoggerChannelFactoryInterface
     *
     * Renamed from loggerFactory to loggerFactoryService to not
     * conflict with a new loggerFactory service on ControllerBase
     * in Drupal 8.1!
     */
    private $loggerFactoryService;

    public function __construct(RoarGenerator $roarGenerator, LoggerChannelFactoryInterface $loggerFactory) //4. This injects the roar generator 
    {
        $this->roarGenerator = $roarGenerator; //5. Assign the $roarGenerator 
        $this->loggerFactoryService = $loggerFactory;
    }

    public static function create(ContainerInterface $container) //2. Call the create Container Interface 
    {
        $roarGenerator = $container->get('dino_roar.roar_generator'); //3. you can find this services from *.services.yml or  drupal container:debug 
        $loggerFactory = $container->get('logger.factory');

        return new static($roarGenerator, $loggerFactory);
    }
    //path: /the/dino/says/{count}
    public function roar($count)
    {
        $roar = $this->roarGenerator->getRoar($count); //7. Use the roar Generator
        $this->loggerFactoryService->get('default')
            ->debug($roar);
        
        //return new Reponse($roar); 
        #kernel.view event listener will wrap this return in to a renderable array 
            //core/core.services.yml 
        return [
            '#title' => $roar
        ];
    }
}


