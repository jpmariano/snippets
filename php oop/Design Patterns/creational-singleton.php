<?php

class Database {
    public function __construct()
    {
        /** Private */
    }
}

class DatabaseSingleton
{
    private static $instance;

    /** Ref: http://code.tutsplus.com/tutorials/the-whens-and-whys-for-php-design-patterns--net-27862
         * Singleton Make sure that only one object gets created
		 * When: You need to achieve singularity and want a cross platform, 
		 * 	lazily evaluated solution which also offers the possibility of creation through derivation.
		 * Why: To offer a single point of access when needed.
     * Returns the *Singleton* instance of this class.
     *
     * @staticvar Singleton $instance The *Singleton* instances of this class.
     *
     * @return Singleton The *Singleton* instance.
     */
    public static function getInstance() {
        if(!isset(DatabaseSingleton::$instance)){  //Check if the $instance did not get instantiated
            DatabaseSingleton::$instance = new Database(); //Association
        }
        return DatabaseSingleton::$instance;
    }

    /**
     * Protected constructor to prevent creating a new instance of the
     * *Singleton* via the `new` operator from outside of this class.
     */
    protected function __construct()
    {
        /** Private */
    }

    /**
     * Private clone method to prevent cloning of the instance of the
     * *Singleton* instance.
     *
     * @return void
     */
    private function __clone()
    {
    }

    /**
     * Private unserialize method to prevent unserializing of the *Singleton*
     * instance.
     *
     * @return void
     */
    private function __wakeup()
    {
    }
}

class DatabaseSingletonChild extends DatabaseSingleton
{
}

$obj = DatabaseSingleton::getInstance();
var_dump($obj === DatabaseSingleton::getInstance());             // bool(true)

$anotherObj = DatabaseSingletonChild::getInstance();
var_dump($anotherObj === DatabaseSingleton::getInstance());      // bool(false)

var_dump($anotherObj === DatabaseSingletonChild::getInstance()); // bool(true)

var_dump($obj);
var_dump($anotherObj);
/********************************************************************/
