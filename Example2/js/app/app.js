'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('my.App', [
  'my.Directives',
  'my.Controllers',
  'my.Services',
  'ngRoute',
]);
angular.module('my.Directives', []);
angular.module('my.Controllers', []);
angular.module('my.Services', []);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Home', {
    templateUrl: 'Views/Home/Home.html',
    controller: 'HomeController'
  });
  $routeProvider.when('/About', {
    templateUrl: 'Views/About/About.html',
    controller: 'AboutController'
  });
  $routeProvider.when('/Blog', {
    templateUrl: 'Views/Blog/Blog.html',
    controller: 'BlogController'
  });
  $routeProvider.when('/Contact', {
    templateUrl: 'Views/Contact/Contact.html',
    controller: 'ContactController'
  });
  $routeProvider.otherwise({redirectTo: '/Home'});
}])

// .config(['$routeProvider', '$locationProvider'], function($routeProvider, $locationProvider) {
// 	$locationProvider.html5Mode(true);
// 	$locationProvider.hashPrefix('!');
// });
