angular.module('starter.controllers')
.controller('DashboardCtrl', function($scope,$rootScope,$ionicModal,usersService,categoryService,dashboardService,ionicMaterialInk) {
	'use strict';
	
	//--------Get Category------------------------
    categoryService.getCategories()
		.then(function(response) {			
			$rootScope.accordionArray = response.data.data;
			$rootScope.searchDefaultCats = getAutoSuggest($rootScope.accordionArray);
		}, function(error) {
			$rootScope.tostMsg(error);
		});
	//--------Banners------------------------
	dashboardService.getBanners()
	.then(function(response) {
		//$rootScope.bannerData=response.data.appbanners.slider;
          // Build table with banner images WIP
        $rootScope.bannerData=response.data.items;
          
          angular.forEach($rootScope.bannerData, function(value,key){
                          var urlbanner = $rootScope.cmsPoint+value.content.substring(26);
                          urlbanner = urlbanner.substring(0,urlbanner.indexOf('}}')-1);
                          $rootScope.bannerData[key].content = urlbanner;
                  });
    }, function(error) {
		$rootScope.showAlert("web service error : "+error);
	});
	//--------Get User Data---------------------
	if($rootScope.userData=='' || typeof($rootScope.userData)=='undefined'){
		usersService.userDetails()
		.then(function(response) {
			if(response.success){
				$rootScope.userData	 = response.data;				
			}
		});
	}
	//----------------------------------
	
	ionicMaterialInk.displayEffect();
});
