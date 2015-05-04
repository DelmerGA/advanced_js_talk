var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  db = require("./models"),
  path = require("path");


app.use(express.static("public"));


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"))
});

// extended: true turns
//   user[email]=blah
//    into {user: {email: "blah" } }
//    instead of { user[email]: "blah" }
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())


// curl localhost:3000/users/:id
app.get("/users/:id", function (req, res) {
  var id = req.params.id;
  db.User.find({ _id: id }, function (err, user) {
    res.send(user);
  });
});


// curl --data "user[email]=blah" localhost:3000/users
// handle posting user data
app.post("/users", function (req, res) {
  console.log(req.query, req.body);
  var userParams = req.body.user;
  db.User.create(userParams, function (err, user) {
    res.send(user);
  });
});

// curl --data "book[title]=The Giver" localhost:3000/users/:id/books
app.post("/users/:id/books", function (req, res) {
  var bookParams = req.body.book;
  bookParams._user_id = req.params.id;

  db.Book.create(bookParams, function (err, book) {
    res.send(201, book);
  });
});

// e.g. curl localhost:3000/users/:id/books
app.get("/users/:id/books", function (req, res) {
  var id = req.params.id;

  db.Book.find({ _user_id: id }, function (err, books) {
    res.send(books);
  });
});



app.listen(3000, function () {
  console.log("SERVER RUNNING")
})