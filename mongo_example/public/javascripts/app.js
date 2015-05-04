var BookApp = angular.module("BookApp", [
  "ngRoute"
]);

BookApp.config(["$routeProvider", function ($routeProvider) {
  $routeProvider.
            when("/", {
              templateUrl: "templates/books.html",
              controller: "BooksCtrl"
            }).
            when("/sign_up", {
              templateUrl: "templates/sign_up.html",
              controller: "UsersCtrl"
            })
}]);

BookApp.controller("UsersCtrl", ["$scope", "$http",
 function ($scope, $http) {
  $scope.newUser = {};

  // similar to 
  // curl --data "user[email]=blah" localhost:3000/users
  $scope.sign_up = function () {
    console.log($scope.newUser)
    $http.post("/users", {
      user: $scope.newUser
    }).success(function (res) {
      console.log(res.data);
    })
  }
}]);

BookApp.controller("BooksCtrl", ["$scope", function ($scope) {
   $scope.newBook = {};
   $scope.books = [];

   $scope.addBook = function () {
     $scope.books.push($scope.newBook);
     $scope.newBook = {};
   }
}]);