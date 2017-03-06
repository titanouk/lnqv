angular.module('starter.services')
.service('initializationService', function($rootScope,$http) {
'use strict';
         
         return {
         getAttributes: function(attributeCode, success, error) {
         $http.get({
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
