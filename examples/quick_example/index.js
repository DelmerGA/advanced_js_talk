var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

var viewsPath = path.join(process.cwd(), "views");

app.use(bodyParser.urlencoded({extended: true}))

app.use(function htmlHelper(req, res, next) {

  res.sendHTML = function (name) {
    var htmlPath = path.join(viewsPath, name + ".html");
    res.sendFile(htmlPath);
  };
  next();

})
var burgers = [
        "Hamburger",
        "Cheese Burger",
        "Dble Cheese Burger"
         ];

var tacos = [
        "Soft Taco",
        "Crunchy Taco",
        "Super Taco"
         ];

// Two things make up a route
// the HTTP verb like GET or POST
// and the URI
app.get("/", function (req, res) {
  res.sendHTML("home");        
});

app.get("/contact", function (req, res) {
  res.sendHTML("contact")
})







app.get("/greet/:name", function (req, res) {
  res.send("Hello " + req.params.name)
});

app.get("/thank", function (req, res) {
  res.send("Thank you, " + req.query.name);
});

app.get("/burgers", function (req, res) {
  res.send(burgers.join(", "));
})

app.post("/burgers", function (req, res) {
  var newBurger = req.body.burger;
  burgers.push(newBurger.title);
  res.redirect("/burgers");
});


app.get("/burgers/:index", function (req, res) {
  var index = req.params.index;
  var burger = burgers[index];
  res.send(burger);
});









app.get("/tacos", function (req, res) {
  res.send(tacos.join(", "));
});

app.get("/add/:x/:y", function (req, res) {
  var x = parseInt(req.params.x, 10);
  var y = parseInt(req.params.y, 10);
  res.send(x + " plus " + y  + "  is " + (x+y));
});

app.get("/multiply", function (req, res) {
  var x = parseInt(req.query.x, 10);
  var y = parseInt(req.query.y, 10);
  res.send("The result is " + (x*y));
});

app.listen(3000, function () {
  console.log("SERVER UP!");

});
