var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  _user_id: mongoose.Schema.Types.ObjectId
});


var Book = mongoose.model("Book", bookSchema);

module.exports = Book;