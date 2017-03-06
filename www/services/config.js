angular.module('starter.services')
.service('configService', function($rootScope,$http) {
'use strict';
         
         var settings = null;
         
         this.initialize = function() {
         $http.get("data/config.json").success(function (c) {
                                               settings = c;
                                               $rootScope.adminToken = c.config.adminToken;
                                               $rootScope.endPoint = c.config.endPoint;
                                               $rootScope.cmsPoint = c.config.cmsPoint;
                                               $rootScope.consumerKey = c.config.consumerKey;
                                               $rootScope.consumerSecret = c.config.consumerSecret;
                                               }).error(function(data){
                                                        console.log("Error during configuration");
                                                        })
         };
         
         this.get = function() {
         return settings;
         }
         
         });
