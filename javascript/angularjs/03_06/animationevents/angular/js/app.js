var myApp = angular.module('myApp', [
  /* Step 2 deeplinking:is added a dependency to myApp */ 
  'ngRoute',
  /* artistControllers:is added a dependency to myApp */ 
  'artistControllers'
]);

/* Step 3 deeplinking: You can now use $routeProvider; $routeProvider is a Provider Used for configuring routes */
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);