"use strict";

var containsAll = require("./containsAll").containsAll;

exports.testOne = function(test) {
  test.equal(true, containsAll([1, 2, 3], [4, 5 , 1, 3, 2]));
  test.done();
};

exports.testTwo = function(test) {
  test.equal(true, containsAll([7,15], [1, 4, 7, 16, 15]));
  test.done();
};

exports.testThree = function(test) {
  test.equal(false, containsAll([7, 6], [4, 5, 6]));
  test.done();
};

exports.testFour = function(test) {
  test.equal(false, containsAll([1, 2], [1, 7, 8, 9]));
  test.done();
};
