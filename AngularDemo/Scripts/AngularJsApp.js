var AngularJsApp = angular.module('AngularJsApp', ['ngRoute']);

AngularJsApp.controller('LandingPageController', LandingPageController);
AngularJsApp.controller('LoginController', LoginController);
AngularJsApp.controller('RegisterController', RegisterController);

AngularJsApp.factory('LoginFactory', LoginFactory);
AngularJsApp.factory('RegistrationFactory', RegistrationFactory );
AngularJsApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);

var configFunction = function ($routeProvider, $httpProvider) {
	$routeProvider.
		when('/routeOne', {
				templateUrl: 'home/one'
			})
		.when('/routeTwo/:donuts', {
				templateUrl: function (params) { return '/home/two?donuts=' + params.donuts; }
			})
		.when('/routeThree', {
			templateUrl: 'home/three'
		})
		.when('/login', {
				templateUrl: '/Account/Login',
				controller: LoginController
		})
		.when('/register', {
				templateUrl: '/Account/Register',
				controller: RegisterController
			});

	$httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

AngularJsApp.config(configFunction);