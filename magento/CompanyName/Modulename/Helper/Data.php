<?php
/**
 * @category   MagePsycho
 * @package    MagePsycho_Easypathhints
 * @author     magepsycho@gmail.com
 * @website    http://www.magepsycho.com
 * @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
 
 /** Data is a magento default helper files
  * Helper talks to can be access by model and block. Can pull data from config. This is where objects gets processed.
  * <factory_alias> node without a class-specific class name to the helper factory method efault to the Data helper class.
  * For Example: Mage::helper('companyName_modulename');  **/
class CompanyName_Modulename_Helper_Data extends Mage_Core_Helper_Abstract
{   /** Gets the configuration field **/
    public function getConfig($field, $default = null){
         /** Gets the store url **/
        $value = Mage::getStoreConfig('easypathhints/option/'.$field);
        if(!isset($value) or trim($value) == ''){
            return $default;
        }else{
            return $value;
        }
	}

    public function log($data){
        if(is_array($data) || is_object($data)){
            $data = print_r($data, true);
        }
        Mage::log($data, null, 'easypathhints.log');
	}

	public function isActive(){
	    /** Talks to the config.xml module default**/ 
		return $this->getConfig('active');
	}
}