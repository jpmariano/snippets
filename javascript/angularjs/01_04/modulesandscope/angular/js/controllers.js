var myApp = angular.module('myApp', []); //[] is for dependencies; points to ng-app directive


//Controls an aspect of the page; $scope - super variable to pass data; points to ng-controller
myApp.controller('MyController', function MyController($scope) {
  //Object Model Author
  $scope.author = {
    'name' : 'Ray Villalobos',
    'title' : 'Staff Author',
    'company' : 'Lynda.com'
  }
});

