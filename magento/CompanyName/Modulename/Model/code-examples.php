<?php

$product = Mage::getModel('catalog/product')->load(2); //instantiating a specific object 
$name = $product->getName() . '-TEST'; //retrieve the name attribute from the object (function name defined in Mage_Catalog_Model_Product)
$price = $product->getPrice(); // ( function name  defined in Mage_Catalog_Model_Product)
$product->setPrice($price + 15); //setting the price  ( function name  defined in Varien_Object - /lib/Varien/Object.php. )
$product->setName($name); //setting the name ( function name  defined in Varien_Object )
$product->save(); //saving the object. ( function name  defined in Varien_Object )


$category = Mage::getModel('catalog/category')->load(5);
$productCollection = $category->getProductCollection(); //getProductCollection() method declaration inside the Mage_Catalog_Model_Category class
$productCollection->addFieldToFilter('created_at', array('from' =>'2012-12-01')); //request all the productsthat were added after December 2012

$productCollection->addFieldToFilter('created_at', array('from' => '2012-12-01')); //request all the productsthat were added after December 2012
$productCollection->addFieldToFilter('created_at', array('to' => '2012-12-30'));

//addFieldToFilter  Attribute Code comparison to SQL
    /* 
        eq =
        neq !=
        like LIKE
        nlike NOT LIKE
        in IN ()
        nin NOT IN ()
        is IS
        notnull NOT NULL
        null NULL
        moreq >=
        gt >
        lt <
        gteq >=
        lteq <=
    */
//other types of filters
$productCollection->addAttributeToFilter('visibility', 4);
    /*
        • Not visible individually: It has a value 1
        • Catalog: It has a value 2
        • Search: It has a value 3
        • Catalog and Search: It has a value 4
    */
$category = Mage::getModel('catalog/category')->load(1);
$productCollection = $category->getProductCollection();
$productCollection->getSelect()->join(array('o'=> 'sales_flat_order_item'), 'main_table.entity_id = o.product_id', array('o.row_total','o.product_id'))->group(array('sku'));
    //getSelect() inhirited from Varien_Data_Collection_Db 
    
    
$category = Mage::getModel('catalog/category')->load(5);
$productCollection = $category->getProductCollection();
$productCollection->joinField('o', 'sales_flat_order_item', array('o.row_total','o.product_id'), 'main_table.entity_id = o.product_id')->group(array('sku'));
    //similar to code above but it is using joinField()


$category = Mage::getModel('catalog/category')->load(5);
$productCollection = $category->getProductCollection();
$productCollection->addAttributeToFilter('visibility', 4);
//Filter product collection by visibility


$category = Mage::getModel('catalog/category')->load(5);
$productCollection = $category->getProductCollection();
$productCollection->addAttributeToFilter('small_image',array('notnull'=>'','neq'=>'no_selection'));
//Filter products without images


$productCollection->addAttributeToFilter('small_image',array('notnull'=>'','neq'=>'no_selection'))
->addAttributeToFilter('thumbnail', array('notnull'=>'','neq'=>'no_selection'))
->addAttributeToFilter('image', array('notnull'=>'','neq'=>'no_selection'));
//Filter products without images

$category = Mage::getModel('catalog/category')->load(5);
$productCollection = $category->getProductCollection();
$select = $productCollection->getSelect();
Mage::getResourceModel('cataloginventory/stock_status')->addStockStatusToSelect($select, Mage::app()->getWebsite());
$select->order('salable desc');
$select->order('price asc');
//Add multiple sort orders



//Using Direct SQL
//Instantiate a resource Model
$resource = Mage::getModel('core/resource');
$read = $resource->getConnection('core_read');
$write = $resource->getConnection('core_write');

$resource = Mage::getModel('core/resource');
$read = $resource->getConnection('core_read');
$query = 'SELECT * FROM ' . $resource->getTableName('catalog/product');
$results = $read->fetchAll($query);

//Reading




?>