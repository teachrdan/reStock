'use strict';

angular.module('reStockApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/yql').success(function(data) {
      $scope.yqlData = data;
    });

    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
