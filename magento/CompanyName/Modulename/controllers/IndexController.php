<?php
/**
 * @category   MagePsycho
 * @package    MagePsycho_Easypathhints
 * @author     magepsycho@gmail.com
 * @website    http://www.magepsycho.com
 * @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
class CompanyName_Modulename_IndexController extends Mage_Core_Controller_Front_Action
{
    public function indexAction()
    {
    	$this->loadLayout();
		$this->renderLayout();
		/*From here it is the job of the blocks to handle the display logic, 
		 * get the data from our models, prepare the data, and send it to the views.*/
    }
}