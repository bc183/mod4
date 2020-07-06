(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html'
      })
    
      // Home page
    
      // Premade list page
      .state('mainList', {
        url: '/main-list',
        templateUrl: 'templates/mainlist.html',
        controller: 'CategoriesController as categories',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            //console.log($ctrl.items);
            return MenuDataService.getAllCategories();
          }]
        }
      })
    
      // Item detail
      .state('itemDetail', {
        url: '/item-detail/{itemId}',
        templateUrl: 'templates/items.html',
        controller: 'ItemController as itemDetail',
        resolve : {
          items : ['$stateParams',"MenuDataService",function($stateParams,MenuDataService){
            return MenuDataService.getAllCategories().then(function(res){
              return res.data;
            });
          }]
        }  
      });
    
    }
    
    })();
    