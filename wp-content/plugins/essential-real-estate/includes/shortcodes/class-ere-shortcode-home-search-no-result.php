<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if (!class_exists('ERE_Shortcode_Home_Search_No_Result')) {
	/**
	 * Class ERE_Shortcode_Package
	 */
	class ERE_Shortcode_Home_Search_No_Result
	{
		public static function output( $atts )
		{
			return ere_get_template_html('property/home-search-no-result.php', array('atts' => $atts));
		}
	}
}