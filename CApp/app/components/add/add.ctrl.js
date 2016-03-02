

//angular.module("homeApp").controller("add",function($scope,$location,$http,homeFactory,$state){
//    alert("Inside Controller of ADD");
//
//    $scope.save=function(){
//        alert("Inside Function of Controller ADD")
//        var data={"id":parseInt($scope.id),"name":$scope.name,"email":$scope.email};
//        alert("Here"+data);
//        homeFactory.retHome(data).success(function(data){
//            alert("saved");
//            $state.go('home');
//        })
//    }
//
//});

angular.module("homeApp").controller("add",function($scope,$location,$http,AddFactory,$state){

    $scope.save = function(){
        var dataVal = {"id":parseInt($scope.id),"name":$scope.name,"email":$scope.email};
        alert("Here"+dataVal.id+dataVal.email+dataVal.name);
        AddFactory.retHome(dataVal).success(function(datas){
            alert("Here"+datas.id+datas.email+datas.name);
            $state.go('home');
        });

    }
});
