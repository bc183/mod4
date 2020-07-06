(function(){
    'use strict'
    angular.module('Data').
    component('categories',{
        templateUrl: './templates/categories.html',
        bindings: {
            items : '<'
        }
    });
})();