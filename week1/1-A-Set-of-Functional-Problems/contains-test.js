"use strict";

var contains = require("./contains").contains;

exports.testOne = function(test) {
  test.equal(true, contains(1, [1, 2, 3]));
  test.done();
};

exports.testTwo = function(test) {
  test.equal(true, contains(7, [1, 2, 3, 3, 7]));
  test.done();
};

exports.testThree = function(test) {
  test.equal(false, contains(7, [1,2,3]));
  test.done();
};

exports.testFour = function(test) {
  test.equal(false, contains(1, [2,3,17,45,78]));
  test.done();
};
