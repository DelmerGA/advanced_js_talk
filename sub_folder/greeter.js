
var greeter = function (name) {
  console.log("Hello", name);
};

var salutation = function (name) {
  console.log("Goodbye", name);
}; 


// module.exports = greeter;
// by default module.exports is {}
module.exports.greeter = greeter;
module.exports.salutation = salutation;