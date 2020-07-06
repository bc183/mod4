(function(){
    angular.module('Data').
    service('MenuDataService',MenuDataService);
    MenuDataService.$inject=['$http'];
    function MenuDataService($http){
        var service = this;

        service.getAllCategories= function(){
            return $http({
                method : 'GET',
                url : 'https://davids-restaurant.herokuapp.com/categories.json'
            }).then(function(res){
                return res;
            }).catch(function(err){
                throw new Error('something went wrong');
            })
        };

        service.getItemsFromCategory = function(arg){
            return $http({
                method: 'GET',
                url : 'https://davids-restaurant.herokuapp.com/menu_items.json?category='+arg
            }).then(function(res){
                return res;
            }).catch(function(res){
                throw new Error('something went wrong');
            });
        }
    }
})();