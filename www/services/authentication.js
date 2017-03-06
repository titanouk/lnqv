angular.module('starter.services')
.factory('authenticationService', function($http,$rootScope,$localStorage) {
         'use strict';
/*
         function changeUser(user){
         angular.extend(currentUser,user);
         }
         
         function urlBase64Decode(str) {
         var output = str.replace('-', '+').replace('_', '/');
         switch (output.length % 4) {
         case 0:
         break;
         case 2:
         output += '==';
         break;
         case 3:
         output += '=';
         break;
         default:
         throw 'Illegal base64url string!';
         }
         return window.atob(output);
         }

         function getUserFromToken() {
         var token = $localStorage.token;
         var user = {};
         if (typeof token !== 'undefined') {
         var encoded = token.split('.')[1];
         user = JSON.parse(urlBase64Decode(encoded));
         }
         return user;
         }
         
         var currentUser = getUserFromToken();
         */
         return {
         userLogin: function(data, success, error){
         $http({
               method: "POST",
               url: $rootScope.endPoint+"integration/customer/token",
               headers: {
               "Content-Type": "application/json"
               },
               params: {
               "username": data.username,
               "password": data.password
               }
         }).success(success).error(error)
         }
         };
         });
