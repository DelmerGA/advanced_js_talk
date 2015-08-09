/*
  NOTE: we assume this file 
    uses jQuery please load
    it first.
*/

// javascripts/app.js
$(document).on("ready", function () {
  
  var todoText = $("#todoText").html();
  var todoTemplate = _.template(todoText);

  // takes in a todo and appends it
  // to a container
  var $todosContainer = $("#todos");
  var render = function (todo) {
      var $todo = $(todoTemplate(todo)); 
      $todosContainer.append($todo);
  };



  $.get("/todos")
    .done(function (data) {
      console.log(data);

      // iterate through data
      $.each(data, function (index, todo) {
        render(todo);
      });

    });


  $("#newTodo").on("submit", function (event) {
      // don't reload!
      event.preventDefault();

      // turns FormData into a string
      var formData = $("#newTodo").serialize();
      // then posting this string to server
      $.post("/todos",formData)
       .done(function (newTodo) {
          alert("CREATED!");
          // empty the form
          $("#newTodo")[0].reset();
          console.log(newTodo)
          // adds the new todo to the page
          render(newTodo);
       })

  })


});