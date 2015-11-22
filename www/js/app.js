// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.services', 'starter.controllers','uiGmapgoogle-maps'])

app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract:true,
      cache:false,
      templateUrl: 'templates/tabs.html'
    })

    // the pet tab has its own child nav-view and history
    .state('tab.home', {
      url: '/home',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/home.html',

        }
      }
    })

    .state('tab.categories', {
      url: '/categories',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/categories.html',
          controller:'categoryCtrl'
        }
      }
    })

    .state('tab.arte', {
      url: '/arte',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/categories/arte.html',
          controller: 'categoryCtrl'
        }
      }
    })
    .state('tab.adultos', {
      url: '/adultos',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/categories/adultos.html',
          controller: 'categoryCtrl'
        }
      }
    })
    .state('tab.performance', {
      url: '/performance',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/categories/performance.html',
          controller: 'categoryCtrl'
        }
      }
    })
    .state('tab.familiar', {
      url: '/familiar',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/categories/familiar.html',
          controller: 'categoryCtrl'
        }
      }
    })
    .state('tab.gastronomia', {
      url: '/gastronomia',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/categories/gastronomia.html',
          controller: 'categoryCtrl'
        }
      }
    })
    .state('tab.chicos', {
      url: '/chicos',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/categories/chicos.html',
          controller: 'categoryCtrl'
        }
      }
    })
    .state('tab.expo', {
      url: '/exposiciones',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/categories/exposiciones.html',
          controller: 'categoryCtrl'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    })

     .state('tab.agenda', {
      url: '/agenda',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/agenda.html',
          controller:"agendaCtrl"
        }
      }
    })
     .state('tab.mapa', {
      url: '/mapa',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/mapa.html',
          controller:"MapCtrl"
        }
      }
    })
     .state('tab.minibus', {
      url: '/minibus',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/minibus.html',
          controller:'busCtrl'
        }
      }
    })
     .state('tab.talleres', {
      url: '/talleres',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/talleres.html',
          controller:'talleresCtrl'
        }
      }
    })
     .state('tab.category',{
      url:'/categoria/:categoryName?categoryUrl',
      cache:false,
      views:{
        'home-tab':{
          templateUrl: 'templates/category.html',
          controller:'categoryCtrl'
        }
      }
     })
     .state('tab.taller', {
      url: '/talleres/:tallerName?tallerNumber',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/taller.html',
          controller:'tallerCtrl'
        }
      }
    })
     .state('tab.ciclo', {
      url: '/veladas',
      cache:false,
      views: {
        'home-tab': {
          templateUrl: 'templates/veladasValientes.html',
          controller:'veladasValientesCtrl'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

