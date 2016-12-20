angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('packages', {
              controller: 'packagesCtrl',
              url: '/packages',
              templateUrl:'../views/packages.html'
            })
            .state('locations', {
              controller: 'locationsCtrl',
              url: '/locations',
              templateUrl: '../views/locations.html'
            })
            .state('booked', {
              controller: 'bookedCtrl',
              url: '/booked/:id',
              templateUrl:'../views/booked.html'
            })
            .state('adventurers', {
              url: '/adventurers',
              parent: 'home',
              templateUrl:'../views/about-adventurers.html'
            })
            .state('contact', {
              url: '/contact',
              parent: 'home',
              templateUrl: '../views/contact.html'
            })
            .state('about', {
              url:'/about',
              templateUrl:'../views/about.html'
            })

        $urlRouterProvider
            .otherwise('/');
    });
