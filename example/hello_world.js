
var colors = require('colors');

//console.log('Hello world'.rainbow);

function Person (first, last) {
 this.first = first;
 this.last = last;
}

Person.prototype.greet = function (name) {
  console.log('Hello'.rainbow, name);
};

module.exports = Person;
