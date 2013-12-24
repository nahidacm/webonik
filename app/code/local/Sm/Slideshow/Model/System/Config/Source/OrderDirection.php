<?php
/*------------------------------------------------------------------------
 # SM Slideshow - Version 1.1
 # Copyright (c) 2013 YouTech Company. All Rights Reserved.
 # @license - Copyrighted Commercial Software
 # Author: YouTech Company
 # Websites: http://www.magentech.com
-------------------------------------------------------------------------*/

class Sm_Slideshow_Model_System_Config_Source_OrderDirection
{
	public function toOptionArray()
	{
		return array(
			array('value' => 'asc',			'label' => Mage::helper('slideshow')->__('Asc')),
			array('value' => 'desc', 		'label' => Mage::helper('slideshow')->__('Desc'))
		);
	}
}
