/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.headerEl = element(by.css('header'));
  this.h1El = this.headerEl.element(by.css('h1'));
  this.newToDoFormEl = element(by.css('.todo-form'));
  this.newToDoInputEl = this.newToDoFormEl.element(by.css('.new-todo'));
  this.todoEls = element.all(by.repeater('todo in filterByStatus(todos)'))
  this.todoStatusFilterEl = element(by.css('.filters'));
  this.todoAllStatusFilterEl = this.todoStatusFilterEl.element(by.css('.do-all'));
  this.todoCompletedStatusFilterEl = this.todoStatusFilterEl.element(by.css('.do-completed'));
  this.todoActiveStatusFilterEl = this.todoStatusFilterEl.element(by.css('.do-active'));

};

module.exports = new MainPage();

