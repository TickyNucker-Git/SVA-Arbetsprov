var app = angular.module("myApp", []);
app.controller('myCtrl', function($scope, $http) {

  // users
  $http.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      $scope.users = response.data;
    });
   
  //todos
  $scope.todoUrl = "https://jsonplaceholder.typicode.com/todos";
  $scope.selectedUser = "";
  $scope.userId = "";

  $scope.myFunc = function() {
    $scope.userId = $scope.selectedUser.id;

    $http.get($scope.todoUrl + "?userId=" + $scope.userId)
    .then(function (response) {
      $scope.todos = response.data;
    });
  };

});
