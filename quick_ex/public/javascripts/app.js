
(function () {


  function TodosCtrl ($http) {
    this.todos = [];

    this.load = function () {
      $http.get('/todos').then(
        function (res) {
          this.todos = this.todos.concat(res.data.data);
        }.bind(this)
      )
    }

    this.createTodo = function () {
      $http.post('/todos', this.newTodo)
        .then(function (res) {
          this.todos.push(
            res.data.data
          )
          this.newTodo = {};
        }.bind(this)
      );
    }

    this.update = function (td) {
      console.log(this)
      $http.put('/todos/'+ td._id, td)
    }

    this.load()
  };

  angular.module('TodoControllers',[])
    .controller('TodosCtrl', [
      '$http',
      TodosCtrl
    ])

   angular.module('TodoApp', [
    'TodoControllers'
  ])
})()
