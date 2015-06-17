"use strict";

var without = require("./without").without;

exports.testOne = function(test){
  test.deepEqual([1, 2], without([5, 6], [1, 2, 5, 6]));
  test.done();
};

exports.testTwo = function(test){
  test.deepEqual([1], without([5, 6], [1, 5, 6]));
  test.done();
};

exports.testThree = function(test){
  test.deepEqual([10, 11], without([5, 6], [10, 5, 6, 11]));
  test.done();
};
