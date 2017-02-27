angular.module('starter.services')
.service('configService', function($rootScope,$http) {
'use strict';
         
         var settings = null;
         
         this.initialize = function() {
         $http.get("data/config.json").success(function (c) {
                                               console.log("configs="+c.config.adminToken);
                                               settings = c;
                                               $rootScope.adminToken = c.config.adminToken;
                                               $rootScope.endPoint = c.config.endPoint;
                                               }).error(function(data){
                                                        console.log("Error during configuration");
                                                        })
         };
         
         this.get = function() {
         return settings;
         }
         
         });
