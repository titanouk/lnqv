angular.module('starter.services')
.factory('categoryService', function($http,$rootScope) {
  'use strict';

         /*
  var service = {
    getCategories: function () {		 
		 return $http.get("data/dashboard/multicategory.json");
		 
    }
  };
          */

         var service = {
         getCategory: function(id){
         return $http({
                      method: "GET",
                      url: $rootScope.endPoint+"categories/"+id,
                      headers: {
                      "Authorization": "Bearer "+$rootScope.adminToken,
                      "Content-Type": "application/json"
                      }
         })
         }
         };
         return service;
         
});
