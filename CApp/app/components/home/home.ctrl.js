//var homeApp=angular.module('homeApp',[]);
/*homeApp.controller('home',['$scope', '$http' ,function (scope,http) {
    alert("Inside Controller");
    http.get(' http://reactive-app.herokuapp.com/getAll').success(function (data) {
        scope.datalist = data;
    });
}]
);*/
//alert("Coming inside");
angular.module('homeApp').controller('home',function($scope, $location, $http, homeFactory,$state) {
  //  alert("Inside Inside");
    homeFactory.retHome().success(function (data) {
        $scope.datalist = data;
        $scope.add=function(){
           // alert('calling');
          $state.go('add');
        }
    });

} );



