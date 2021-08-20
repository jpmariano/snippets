var myApp = angular.module('myApp', []);
//$http - a service to access external data; handle http communication; this is like ajax that deals with client server communication
myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
  });
}]);

