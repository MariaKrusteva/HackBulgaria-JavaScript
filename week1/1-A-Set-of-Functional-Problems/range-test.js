"use strict";

var range = require("./range").range;

exports.testRangeOne = function(test) {
  test.deepEqual([1,2,3,4], range(1,4));
  test.done();
};

exports.testRangeTwo = function(test) {
  test.deepEqual([1], range(1,1));
  test.done();
};

exports.testRangeThree = function(test) {
  test.deepEqual([], range(2,1));
  test.done();
};
