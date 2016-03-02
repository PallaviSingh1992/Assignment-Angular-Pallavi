 angular.module('homeApp').config(function($stateProvider,$urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl:"../../../CApp/app/components/home/home.html",
                controller: 'home'
            })
            .state('add',{
             url:'/add',
             templateUrl:"../../../CApp/app/components/add/add.html",
             controller:'add'
     });

    });
