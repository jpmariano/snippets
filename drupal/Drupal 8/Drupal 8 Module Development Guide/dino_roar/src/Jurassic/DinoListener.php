<?php

namespace Drupal\dino_roar\Jurassic;

use Drupal\Core\Logger\LoggerChannelFactoryInterface; 
use Symfony\Component\EventDispatcher\EventSubscriberInterface; //Step 1: Find the Event use the event tab in web profiler  EventSubscriberInterface is just one of them
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;  //5 drupal-8/vendor/symfony/http-kernel/KernelEvents.php  

//Step 2. Implement the interface
class DinoListener implements EventSubscriberInterface
{
    private $loggerFactory;
    //LoggerChannelFactoryInterface is just an additional action added to event
    public function __construct(LoggerChannelFactoryInterface $loggerFactory)
    {
        $this->loggerFactory = $loggerFactory;
    }
    //Step 6: $event returns GetResponseEvent - Step 6. Register this DinoListener Class in dino_roar/dino_roar.services.yml
    public function onKernelRequest(GetResponseEvent $event)
    {
        //var_dump($event); die;
        $request = $event->getRequest(); //from Symfony\Component\HttpKernel\KernelEvents
        $shouldRoar = $request->query->get('roar'); //url/?roar=1 

        if ($shouldRoar) {
            $this->loggerFactory->get('default')->debug('ROOOOOOOOAR');//kernel.view - see event in web profiler see how the class use renderArray - and see those settings in  core.services.yml 
        }
    }


    //Step3. getSubscribedEvents From EventSubscriberInterface //see the api.drupal.org as to how to use this methods
    public static function getSubscribedEvents()
    {
        return [
            //Step 4:Classname::ConstantName or event name 'kernel.request' => 'functionameyouliketocall' - onKernelRequest()
            KernelEvents::REQUEST => 'onKernelRequest',
        ];
    }

}