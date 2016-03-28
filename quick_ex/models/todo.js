var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name:        {
    type:     String,
    required: true
  },
  description: String,
  completed:   Boolean
});


module.exports = mongoose.model('Todo', TodoSchema);
