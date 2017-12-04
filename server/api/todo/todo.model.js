'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TodoSchema = new Schema({
  title: String,
  completed: Boolean,
  highPriority: {
    type: Boolean,
    require: false
  }
});

module.exports = mongoose.model('Todo', TodoSchema);
