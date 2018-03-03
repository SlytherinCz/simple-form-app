SimpleFormApp.config(['$routeProvider','$locationProvider',
    function ($routeProvider,$locationProvider) {
        $routeProvider
            .when('/landing-page', {
                templateUrl: 'landingPageView.html',
                controller: 'landingPageController'
            })
            .when('/form', {
                templateUrl: 'formView.html',
                controller: 'formController'
            })
            .when('/admin', {
                templateUrl: 'adminView.html',
                controller: 'adminController'
            })
            .otherwise({
                redirectTo: '/landing-page'
            });
        $locationProvider.html5Mode(true);
    }]);