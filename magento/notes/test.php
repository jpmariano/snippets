<?php

require_once 'app/Mage.php';

Mage::app('admin');

// $product = new TutsPlus_Demo_Model_Product;
// $product->sayHello();
// 
// $customer = new Mage_Customer_Model_Session;

//naming is done through lib/Varien/autoload.pgp

// $customer2 = Mage::getModel("customer/session");
// First it goes to Mage/Customer/etc/config.xml
// it then locates Mage/Customer/Model class
// Then it goes to Mage/Customer/Model/session

// echo get_class($customer2);


//TutsPlus_Demo_model_Product
// $product = Mage::getModel("demo/product");
// $product->sayHello();

// $helper = Mage::helper("demo/customer");
// $helper -> sayHi();

 // $category = Mage::getModel("catalog/category") ->load();
 // var_dump($category->getChildren());

 
 //$product = Mage::getModel("catalog/product") ->load(1);
 //var_dump($product);
//echo $product ->getData('description');
// Possible because of lib|varien|object.php
//echo $product ->getdescription();

//updating Data from table
//$product ->setData('description', 'haha');
//$product ->setdescription('haha');
//permanently saving the data update
//$product ->setdescription('haha')->save();
//permanently deleting it
//$product->delete();
//echo $product->getdescription();

//$product ->setData('meta_title', 'updated');
//$product ->setMetaTitle('updated');
//echo $product->getMetaTitle();


//Collections

/*
$products = Mage::getModel("catalog/product") ->getCollection(); 
 foreach($products as $product) {
 	var_dump ($product->getName());
 	
 }

 */

 
 /*
 $product = Mage::getModel("catalog/product")->load(46);
 echo $product->getData('meta_title');
 echo $product->getMetaTitle();
 echo $product->setMetaTitle('newvalue');
 echo $product->setMetaTitle('newvalue')->save();
 
  echo $product->delete(); 
  $product = Mage::getModel("catalog/product")->getCollection();
  */
  
  
  
 
 /*
  Get set uses magic method from variean/object.php
  
 public function __call($method, $args)
    {
        switch (substr($method, 0, 3)) {
            case 'get' :
                //Varien_Profiler::start('GETTER: '.get_class($this).'::'.$method);
                $key = $this->_underscore(substr($method,3));
                $data = $this->getData($key, isset($args[0]) ? $args[0] : null);
                //Varien_Profiler::stop('GETTER: '.get_class($this).'::'.$method);
                return $data;

            case 'set' :
                //Varien_Profiler::start('SETTER: '.get_class($this).'::'.$method);
                $key = $this->_underscore(substr($method,3));
                $result = $this->setData($key, isset($args[0]) ? $args[0] : null);
                //Varien_Profiler::stop('SETTER: '.get_class($this).'::'.$method);
                return $result;

            case 'uns' :
                //Varien_Profiler::start('UNS: '.get_class($this).'::'.$method);
                $key = $this->_underscore(substr($method,3));
                $result = $this->unsetData($key);
                //Varien_Profiler::stop('UNS: '.get_class($this).'::'.$method);
                return $result;

            case 'has' :
                //Varien_Profiler::start('HAS: '.get_class($this).'::'.$method);
                $key = $this->_underscore(substr($method,3));
                //Varien_Profiler::stop('HAS: '.get_class($this).'::'.$method);
                return isset($this->_data[$key]);
        }
        throw new Varien_Exception("Invalid method ".get_class($this)."::".$method."(".print_r($args,1).")");
    } 
 */
 
 /*
  $products = Mage::getModel("catalog/product") ->getCollection()
 			 ->addAttributeToSelect('name')
 			 ->addAttributeToSelect('price');
  */
	//same as above
	
 /*
    $products = Mage::getModel("catalog/product") ->getCollection()
 			 ->addAttributeToSelect(array('name', 'price'))
 			 ->addFieldToFilter('price', array("gt" => 20));
 			 
  foreach($products as $product) {
 	var_dump($product);
	die();
 	
 }
  
  */