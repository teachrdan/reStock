'use strict';

angular.module('reStockApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.rawData = [];
    $scope.allStocks = [];
    $http.get('/api/yql').success(function(data) {
      angular.forEach(data.query.results.industry.company, function(company){
        var tuple = [];
        tuple[0] = company.name;
        tuple[1] = company.symbol;
        $scope.rawData.push(tuple);
      });
    });

  });
