<?php
/*------------------------------------------------------------------------
 # SM Slideshow - Version 1.1
 # Copyright (c) 2013 YouTech Company. All Rights Reserved.
 # @license - Copyrighted Commercial Software
 # Author: YouTech Company
 # Websites: http://www.magentech.com
-------------------------------------------------------------------------*/

class Sm_Slideshow_Model_System_Config_Source_OrderBy
{
	public function toOptionArray()
	{
		return array(
			array('value' => 'position',	'label' => Mage::helper('slideshow')->__('Position')),
			array('value' => 'created_at', 	'label' => Mage::helper('slideshow')->__('Date Created')),
			array('value' => 'name', 		'label' => Mage::helper('slideshow')->__('Name')),
			array('value' => 'price', 		'label' => Mage::helper('slideshow')->__('Price')),
			array('value' => 'random', 		'label' => Mage::helper('slideshow')->__('Random')),
			array('value' => 'top_rating', 	'label' => Mage::helper('slideshow')->__('Top Rating')),
			array('value' => 'most_reviewed',	'label' => Mage::helper('slideshow')->__('Most Reviews')),
			array('value' => 'most_viewed',	'label' => Mage::helper('slideshow')->__('Most Visited')),
			array('value' => 'best_sales',	'label' => Mage::helper('slideshow')->__('Most Selling')),
		);
	}
}
