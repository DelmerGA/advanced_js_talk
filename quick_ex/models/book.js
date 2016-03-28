var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


var BookSchema = new mongoose.Schema({
  title:       String,
  auther:      String,
  description: String
});


BookSchema.statics.all = function (cb) {
  this.find({}, cb)
};

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;

Book.create({
  description: 'A reeeeeallllllly long book',
  auther: 'Leo Tolstoy',
  title: 'War And Peace',
}, function (err, book) {
  console.log(book)
})


Book.find(
  {title: 'War And Peace'},
  function (err, results) {
   console.log(results)
})

Book.findOne(
  {title: 'War And Peace'},
  function (err, book) {
     console.log(book)
})

Book.update(
  {title:  'eceap dna raw'},
  {title: 'War And Peace'},
  {multi: true},
  function (err, books) {
     console.log(arguments)
})
















