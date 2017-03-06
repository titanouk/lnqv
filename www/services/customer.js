angular.module('starter.services')
.factory('customerService', function($http,$rootScope,$localStorage) {
         'use strict';
        
         return {
getCustomer: function(success,error){
    $http({
                 method: "GET",
                 url: $rootScope.endPoint+"customers/me",
                 headers: {
                 "Authorization": "Bearer "+$rootScope.customerToken,
                 "Content-Type": "application/json"
                 }
                 }).success(success).error(error)
}
         };

         });
