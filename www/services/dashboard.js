angular.module('starter.services')
.factory('dashboardService', function($http,$rootScope,configService) {
  'use strict';
         
/*
  var service = {
    getBanners: function () {			
		return	$http.get("data/dashboard/appbanners.json")
    }
  };
 */
         var config = configService.get();
         var service = {
         getBanners: function(){
         return $http({
                      method: "GET",
                      url: $rootScope.endPoint+"cmsBlock/search",
                      headers: {
                      "Authorization": "Bearer "+ $rootScope.adminToken,
                      "Content-Type": "application/json"
                      },
                      params: {
                      "searchCriteria[filterGroups][0][filters][0][field]": "identifier",
                      "searchCriteria[filterGroups][0][filters][0][value]": "dashBoardAd%",
                      "searchCriteria[filterGroups][0][filters][0][conditionType]": "like"
                      }
                      })
         }};
         
  return service;
});


//waze
