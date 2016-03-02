//
//
//
//angular.module('homeApp').factory('homeFactory',function($http,$state){
//    alert("Inside Factory");
//    return{
//        retHome:function(data){
//            return $http({
//                url:'http://localhost:9000/student/save',
//                method:'POST',
//                data:JSON.stringify(data),
//                contentType:"application/json",
//                dataType:"json"
//            })
//        }
//    };
//});

angular.module("homeApp").factory("AddFactory",function($http, $state){
    return {
        retHome: function (datas){alert("Th"+datas);
            return $http({
                method: 'POST',
                url:'http://localhost:9000/student/save',
                data: JSON.stringify(datas),
                contentType: "application/json",
                dataType: "json"
            });
        }
    }
});
