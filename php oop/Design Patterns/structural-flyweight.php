<?php
/**
 * Reference: http://www.jakowicz.com/flyweight-pattern-in-php/
 * storing common and repetitive data required by models.
 * a factory should be used which creates flyweight objects and stores references to them internally
 */
interface WeaponInterface
{
    public function __construct();
    public function getBaseDamage();
    public function getEnhancementsDamage();
    public function getDamage();
    public function reload();
    public function addEnhancement(WeaponFlyweightInterface $enhancement);
}

class PlasmaRifle implements WeaponInterface
{
    
    const TOTAL_AMMO_IN_PLAMA_SHELL = 10;
    const MIN_DAMAGE = 50;
    const MAX_DAMAGE = 75;

    private $ammoRemaining = null;
    private $enhancements  = [];

    public function __construct()
    {
        $this->reload();
    }

    public function getBaseDamage()
    {
        return rand(self::MIN_DAMAGE, self::MAX_DAMAGE);
    }

    public function getEnhancementsDamage()
    {
        $damage = 0;
        foreach($this->enhancements as $enhancement) {
            $damage += $enhancement->getDamage();
        }
        return $damage;
    }

    public function getDamage()
    {
        return  $this->getBaseDamage() + $this->getEnhancementsDamage();

    }

    public function reload()
    {
        $this->ammoRemaining = self::TOTAL_AMMO_IN_PLAMA_SHELL;
    }
        
    public function addEnhancement(WeaponFlyweightInterface $enhancement)
    {
        $this->enhancements[] = $enhancement;
    }

}

interface WeaponFlyweightInterface
{
    public function getDamage();
}

class PlasmaRifleGrenadeLauncherFlyweight implements WeaponFlyweightInterface
{
    const MIN_DAMAGE = 100;
    const MAX_DAMAGE = 120;

    public function getDamage()
    {
        return rand(self::MIN_DAMAGE, self::MAX_DAMAGE);
    }
}

class PlasmaRifleExplosionFlyweight implements WeaponFlyweightInterface
{
    const MIN_DAMAGE = 500;
    const MAX_DAMAGE = 1000;

    public function getDamage()
    {
        return rand(self::MIN_DAMAGE, self::MAX_DAMAGE);
    }
}

class PlasmaRifleFlyweightFactory
{
    private static $instances = [];

    public static function factory($flyweight)
    {
        $className = "PlasmaRifle" . $flyweight . "Flyweight";

        if(empty(self::$instances[$className])) {
            self::$instances[$className] = new $className();
        }
        return self::$instances[$className];
    }
}

$plasmaRifle = new PlasmaRifle();

$plasmaRifle->addEnhancement(PlasmaRifleFlyweightFactory::factory("GrenadeLauncher"));
$plasmaRifle->addEnhancement(PlasmaRifleFlyweightFactory::factory("GrenadeLauncher"));
$plasmaRifle->addEnhancement(PlasmaRifleFlyweightFactory::factory("GrenadeLauncher"));
$plasmaRifle->addEnhancement(PlasmaRifleFlyweightFactory::factory("GrenadeLauncher"));
$plasmaRifle->addEnhancement(PlasmaRifleFlyweightFactory::factory("GrenadeLauncher"));

$plasmaRifle->addEnhancement(PlasmaRifleFlyweightFactory::factory("Explosion"));
$plasmaRifle->addEnhancement(PlasmaRifleFlyweightFactory::factory("Explosion"));
$plasmaRifle->addEnhancement(PlasmaRifleFlyweightFactory::factory("Explosion"));
$plasmaRifle->addEnhancement(PlasmaRifleFlyweightFactory::factory("Explosion"));
$plasmaRifle->addEnhancement(PlasmaRifleFlyweightFactory::factory("Explosion"));

// Shot damage can vary wildly due to the random factor in base damage and flyweight enhancements
echo "Shot 1 Damage: " . $plasmaRifle->getDamage(); # Shot 1 Damage: 3944
echo "Shot 2 Damage: " . $plasmaRifle->getDamage(); # Shot 2 Damage: 4637
echo "Shot 3 Damage: " . $plasmaRifle->getDamage(); # Shot 3 Damage: 4345
?>