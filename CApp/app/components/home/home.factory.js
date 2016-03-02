    //
    //angular.module('homeApp').factory('homeFactory',function($http){
    //    alert("Inside Factory");
    //      return{
    //           retHome:function(){
    //               return $http({
    //                   url:'http://localhost:9000/student/1',
    //                   method:'GET'
    //               })
    //           }
    //      };
    //});


    angular.module('homeApp').factory('homeFactory',function($http){
       // alert("Inside Factory");
        return{
            retHome:function(){
                return $http({
                    url:'http://localhost:9000/student/all',
                    method:'POST'
                })
            }
        };
    });