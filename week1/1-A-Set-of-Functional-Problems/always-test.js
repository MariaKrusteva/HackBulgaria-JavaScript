"use strict";

var always = require("./always").always;

exports.testOne = function(test) {
  var f = always(5);
  test.equal(5, f());
  test.done();
};

exports.testTwo = function(test) {
  var f = always(7);
  test.equal(7, f());
  test.done();
};
