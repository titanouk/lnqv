angular.module('starter.services')
.factory('configService', function($http) {
  'use strict';

  var service = {
    getAdminToken: function () {
		 return $http.get("data/config.json");
		 
    }
  };

  return service;
});
