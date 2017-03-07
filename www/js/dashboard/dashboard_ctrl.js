angular.module('starter.controllers')
.controller('DashboardCtrl', function($scope,$rootScope,$ionicModal,$localStorage,usersService,categoryService,categoriesService,dashboardService,initializationService,ionicMaterialInk) {
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
                              if ($rootScope.categoriesArray[key].children_data!==undefined){
                              $scope.subcat = [];
                              angular.forEach($rootScope.categoriesArray[key].children_data, function(v,k){
                                              $scope.subcat.push({category_id:$rootScope.categoriesArray[key].children_data[k].id,title:$rootScope.categoriesArray[key].children_data[k].name});
                                              })
                              $rootScope.accordionArray.push({category_id:$rootScope.categoriesArray[key].id,title:$rootScope.categoriesArray[key].name,subCollection:$scope.subcat});
                              } else {
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
            
            //-------Populate attributes data------
            initializationService.getAttributes("wine_color",function(response){
                                                $localStorage.wine_colors = response.options;
                                                },function(error){
            console.log("Impossible de charger les donnees de couleur de vin="+JSON.stringify(error));
            });
            initializationService.getAttributes("wine_grape",function(response){
                                                $localStorage.wine_grapes = response.options;
                                                },function(error){
                                                console.log("Impossible de charger les donnees de cepage="+JSON.stringify(error));
                                                });
            initializationService.getAttributes("wine_area",function(response){
                                                $localStorage.wine_areas = response.options;
                                                },function(error){
                                                console.log("Impossible de charger les donnees appelation="+JSON.stringify(error));
                                                });
            initializationService.getAttributes("wine_size",function(response){
                                                $localStorage.wine_sizes = response.options;
                                                },function(error){
                                                console.log("Impossible de charger les donnees de taille de vin="+JSON.stringify(error));
                                                });
            initializationService.getAttributes("apero_size",function(response){
                                                $localStorage.apero_sizes = response.options;
                                                },function(error){
                                                console.log("Impossible de charger les donnees de taille de apero="+JSON.stringify(error));
                                                });
            initializationService.getAttributes("apero_type",function(response){
                                                $localStorage.apero_types = response.options;
                                                },function(error){
                                                console.log("Impossible de charger les donnees de type de apero="+JSON.stringify(error));
                                                });
            initializationService.getAttributes("digestif_size",function(response){
                                                $localStorage.digestif_sizes = response.options;
                                                },function(error){
                                                console.log("Impossible de charger les donnees de taille de digestif="+JSON.stringify(error));
                                                });
            initializationService.getAttributes("digestif_type",function(response){
                                                $localStorage.digestif_types = response.options;
                                                },function(error){
                                                console.log("Impossible de charger les donnees de type de digestif="+JSON.stringify(error));
                                                });
            initializationService.getAttributes("beer_size",function(response){
                                                $localStorage.beer_sizes = response.options;
                                                },function(error){
                                                console.log("Impossible de charger les donnees de taille de bieres="+JSON.stringify(error));
                                                });
            initializationService.getAttributes("beer_type",function(response){
                                                $localStorage.wine_sizes = response.options;
                                                },function(error){
                                                console.log("Impossible de charger les donnees de types de biere="+JSON.stringify(error));
                                                });
            initializationService.getAttributes("softs_size",function(response){
                                                $localStorage.wine_sizes = response.options;
                                                },function(error){
                                                console.log("Impossible de charger les donnees de taille de softs="+JSON.stringify(error));
                                                });
            
            //-------------------------------------

	
	ionicMaterialInk.displayEffect();
});
