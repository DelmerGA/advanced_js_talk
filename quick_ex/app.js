var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose');

mongoose.connect('mongodb://localhost/test');

app.use(require('./actions/site'))

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'));
app.use(express.static('bower_components'));

app.use(require('./actions/todos.js'));

app.listen('3000', function () {
  console.log('Go to localhost:3000/');
});
