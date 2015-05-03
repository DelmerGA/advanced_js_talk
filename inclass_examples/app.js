var express = require("express"),
  app = express(),
  path = require("path");


// our custom express middleware
app.use(function (req, res, next) {
  console.log("Running");
  res.sendOps = {};
  res.sendOps.root = path.join(__dirname, "views");

  res.sendHTML = function (fname) {
    res.sendFile(fname, res.sendOps);
  };

  next();
});


// view example
app.get("/", function (req, res) {
  res.sendHTML("index.html");
});


app.get("/add/:x/:y", function (req, res) {
  var x = parseInt(req.params.x);
  var y = parseInt(req.params.y);
  var result = (x+y);
  res.send(200, result);
});


app.get("/multiply/:x/:y", function (req, res) {
  var x = parseInt(req.params.x);
  var y = parseInt(req.params.y);
  var result = (x*y);
  res.send(200, result);
});


app.get("/greet", function (req, res) {
  var name = req.query.name;
  res.send(200, "Hello " + name);
});


app.listen(3000, function () {
  console.log("RUNNING ON 3000");
});