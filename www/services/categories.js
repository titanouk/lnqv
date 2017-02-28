angular.module('starter.services')
.factory('categoriesService', function($http,$rootScope) {
  'use strict';

         var service = {
         getCategories: function(){
         return $http({
                      method: "GET",
                      url: $rootScope.endPoint+"categories",
                      headers: {
                      "Authorization": "Bearer "+ $rootScope.adminToken,
                      "Content-Type": "application/json"
                      }
                      })
         }};
         
         return service;
         
});
