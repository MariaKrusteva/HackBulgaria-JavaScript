"use strict";

var ul = require("./ul").ul;
var ol = require("./ol").ol;

exports.testOne = function(test) {
  test.equal([1,2, ul(1,4));
  test.done();
};

exports.testTwo = function(test) {
  test.deepEqual([1], ul(1,1));
  test.done();
};

exports.testThree = function(test) {
  test.deepEqual([], ul(2,1));
  test.done();
};
