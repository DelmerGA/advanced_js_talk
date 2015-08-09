var express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path");

var db = require("./models");

var app = express();

app.use(bodyParser.urlencoded({extended: true}))
var htmlHelper = require("./lib/html_helper");
app.use(htmlHelper);

app.use(express.static("public"))
app.use(express.static("bower_components"))


app.post("/todos", function (req, res) {
   var newTodo = req.body.todo;
   var todo = new db.Todo(newTodo);
   todo.save(function (err, todo) {
    if (err) {
      return res.status(500).end("ooops!");
    }
    console.log("NEW TODO", todo)
    res.send(todo);
   });
});

app.get("/todos", function (req, res) {
  // find all todos
  db.Todo.find({}, function (err, todos) {
    res.send(todos);
  });
});

app.get("/", function (req, res) {
  res.sendHTML("home");
});

app.listen(3000, function () {
  console.log("Running");
});



