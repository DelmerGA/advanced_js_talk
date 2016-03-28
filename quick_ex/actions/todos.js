var express = require('express');
var todo = express.Router();

var Todo = require('../models/todo.js');

// GET ALL BURGERS
todo.get('/todos', function (req, res) {
  Todo.find({}, function (err, todos) {
    res.json({
      meta: {
        count: todos.length
      },
      data: todos
    });
  })
});

todo.post('/todos', function (req, res) {
  var todo = req.body;
  console.log(todo)
  Todo.create(todo, function (err, createdTodo) {
    //console.log(err, createdTodo)
    res.json({
      data: createdTodo
    });
  })
});

todo.put('/todos/:id', function (req, res) {
  console.log(req.body)
  Todo.findOne({_id: req.params.id}, function (err, todo) {
    todo.name = req.body.name;
    todo.description = req.body.description;
    todo.completed = req.body.completed;
    todo.save(function (err, todo) {
      !err ? res.send(200) : res.send(500)
    })
  })
});


module.exports = todo;
