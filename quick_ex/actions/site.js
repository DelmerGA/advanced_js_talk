var express = require('express');
var site = express.Router();

var path  = require('path');
var views = path.join(process.cwd(), '/views');

site.get('/contact', function (req, res) {
  var contactPath = path.join(views, '/contact.html');
  res.sendFile(contactPath);
});

site.get('/home', function (req, res) {
  res.render('home')
});

site.get('/', function (req, res) {
  var text = "View all burgers at " +
              "<a href='/burgers'>Burgers</a>";

  res.send(text)
});

module.exports = site;
