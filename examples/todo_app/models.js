//models.js file
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos_app");

var TodoSchema = new mongoose.Schema({
                  title: {
                    type: String,
                    default: ""
                  },
                  description: {
                    type: String,
                    default: ""
                  },
                  completed: {
                    type: Boolean,
                    default: false
                  }
                });


var Todo = mongoose.model("Todo", TodoSchema);
module.exports.Todo = Todo;

