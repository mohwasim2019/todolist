/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Todo = require('../api/todo/todo.model');

Todo.find({}).remove(function() {
  Todo.create({
    title : 'Learn Some DevOps with Donal and Will',
    completed: true
  }, {
    title : 'Go for Coffee',
    completed: false
  });
});
