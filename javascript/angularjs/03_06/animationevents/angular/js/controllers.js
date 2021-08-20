/* Step 2 Animation : Added as a dependency to the controller; you can now add animation to your partials/template*/
var artistControllers = angular.module('artistControllers', ['ngAnimate']); 

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    /* $routeParams service allows you to retrieve the current set of route parameters */
    $scope.whichItem = $routeParams.itemId;
    
    /* Step 2 Navigation: how prevItem navigation wil behave which is called inside partials*/
    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.artists.length-1;
    }

    if ($routeParams.itemId < $scope.artists.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }
     /* Step 2 Navigation:  */
  });
}]);

