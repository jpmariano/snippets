<?php
/**
 * Reference: http://code.tutsplus.com/tutorials/the-whens-and-whys-for-php-design-patterns--net-27862
 * When Use a Factory Pattern when you find yourself writing code to gather information necessary to create objects.
 * Why: Factories help to contain the logic of object creation in a single place. They can also break dependencies to facilitate loose coupling and dependency injection to allow for better testing.
 */
class Automobile
{
    private $vehicleMake;
    private $vehicleModel;

    public function __construct($make, $model)
    {
        $this->vehicleMake = $make;
        $this->vehicleModel = $model;
    }

    public function getMakeAndModel()
    {
        return $this->vehicleMake . ' ' . $this->vehicleModel;
    }
}

class AutomobileFactory
{
    public static function create($make, $model)
    {
        return new Automobile($make, $model); //Association
    }
}

// have the factory create the Automobile object
$veyron = AutomobileFactory::create('Bugatti', 'Veyron');

print_r($veyron->getMakeAndModel()); // outputs "Bugatti Veyron"