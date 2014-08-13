var app = angular.module('myApp', []);

app.controller("MainController", function($scope){
    $scope.isLoggedIn = function(){
      return false;  
    };
});