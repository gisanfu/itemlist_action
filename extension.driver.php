<?php

	Class extension_itemlist_action extends Extension{

		public function about(){
			return array('name' => 'ItemList Action',
						 'version' => '1.00',
						 'release-date' => '2010-11-9',
						 'author' => array('name' => 'Jerry',
										   'website' => 'http://github.com/gisanfu',
										   'email' => 'gisanfu@gmail.com')
				 		);
		}
		
		public function getSubscribedDelegates(){
			return array(
						array(
							'page'		=> '/backend/',
							'delegate'	=> 'InitaliseAdminPageHead',
							'callback'	=> 'initaliseAdminPageHead'
						)
					);
		}
		
		public function install(){
			return true;
		}
		
		public function uninstall(){
		}
		
		public function initaliseAdminPageHead($context) {
			$page = $context['parent']->Page;
			
			$page->addScriptToHead(URL . '/extensions/itemlist_action/assets/script.js', 3134);
		}
		
	}
