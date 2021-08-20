var myApp = angular.module('myApp', [
  /* Turns on deep linking features */
  'ngRoute',
  /* Points to the controller to control the partials */
  'artistControllers'
]);
/*calls $routeProvider and pass a function */
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
  	/*TemplateUrl is the view that will be injected when navigating to /list */
    templateUrl: 'partials/list.html',
    /*controller is the controller that is called that is called when navigating to /list */
    controller: 'ListController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);