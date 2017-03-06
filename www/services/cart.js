angular.module('starter.services')
.factory('cartService', function($http,$rootScope,$localStorage) {
         'use strict';
        
         return {
createEmptyCart: function(success,error){
    $http({
                 method: "POST",
                 url: $rootScope.endPoint+"carts/mine",
                 headers: {
                 "Authorization": "Bearer "+$rootScope.customerToken,
                 "Content-Type": "application/json"
                 }
                 }).success(success).error(error)
}
         };

         });
