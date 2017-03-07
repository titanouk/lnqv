angular.module('starter.services')
.service('initializationService', function($rootScope,$http,$localStorage) {
'use strict';
         
         return {
         getAttributes: function(attributeCode, success, error) {
         $http({
                   method: "GET",
                   url: $rootScope.endPoint+"products/attributes/"+attributeCode,
                   headers: {
                   "Authorization": "Bearer "+$rootScope.adminToken,
                   "Content-Type": "application/json"
                   }
         }
         ).success(success).error(error)
         }
         };
         
         });
