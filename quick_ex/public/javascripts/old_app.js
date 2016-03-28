
// wait for document ready
$(function () {
  $.get('/todos')
    .done(function (todos) {
      todos.data.forEach(function (todo) {
        var $todo = $('<div>').html(todo.name)
        $('#todosCon').append($todo);
      })
    })

  $('#newTodo').on('submit', function (event) {
     event.preventDefault();

     $.post('/todos', $(this).serialize())
      .done(function (res) {
        var $todo = $('<div>').html(res.data.name)
        $('#todosCon').append($todo);
      })
      .fail(function () {
        console.log('ERROR SAVING');
      })
  });
})

// function Todo(params) {
//   this.id   = params.id;
//   this.name = params.name;
//   this.$container = this.constructor.$sel;
// }

// Todo.$sel = $('#todosCon');
// Todo.$form = $('#newTodo');
// Todo.resource = '/todos';

// Todo.all = function () {
//   return  $.get(this.resource);
// }

// Todo.create = function (data) {
//   return $.post(this.resource, data);
// }


// Todo.prototype.save = function () {

// }

// Todo.prototype.render = function () {
//    var $todo = $('<div>').html(this.name)
//    this.append($todo);
// }




