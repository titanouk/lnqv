angular.module('starter.controllers')
.controller('DashboardCtrl', function($scope,$rootScope,$ionicModal,usersService,categoryService,categoriesService,dashboardService,ionicMaterialInk) {
	'use strict';
	
	//--------Get Category------------------------
    categoriesService.getCategories()
		.then(function(response) {			
			$rootScope.categoriesArray = response.data.children_data;
              $rootScope.accordionArray=[];
              angular.forEach($rootScope.categoriesArray, function(value,key){
                              categoryService.getCategory($rootScope.categoriesArray[key].id)
                              .then(function(response){
                                    var cat = response.data;
                                    angular.forEach(cat.custom_attributes, function(v,k){
                                                    if (cat.custom_attributes[k].attribute_code == "image"){
                                                    $rootScope.categoriesArray[key].icon = $rootScope.cmsPoint+"catalog/category/"+cat.custom_attributes[k].value;
                                                    }
                                                    });
                                    })
                              if ($rootScope.categoriesArray[key].id!==undefined){
                              $rootScope.accordionArray.push({category_id:$rootScope.categoriesArray[key].id,title:$rootScope.categoriesArray[key].name});
                              }
                              });
			$rootScope.searchDefaultCats = getAutoSuggest($rootScope.accordionArray);
		}, function(error) {
			$rootScope.tostMsg(error);
		});
	//--------Banners------------------------
	dashboardService.getBanners()
	.then(function(response) {
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
