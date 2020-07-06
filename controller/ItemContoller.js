(function () {
    'use strict';
    
    angular.module('Data')
    .controller('ItemController', ItemController);
    
    // Version with resolving to 1 item based on $stateParams in route config
    ItemController.$inject = ['$stateParams', 'items'];
    function ItemController($stateParams, items) {
      var itemDetail = this;
      console.log(items.data[$stateParams.itemId]);
      itemDetail.item = items.data[$stateParams.itemId];
      console.log(itemDetail.item); 
    }
    })();