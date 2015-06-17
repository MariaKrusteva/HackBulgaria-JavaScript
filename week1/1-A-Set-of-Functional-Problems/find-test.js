"use strict";

var find = require("./find").find;

exports.testOne = function(test) {
  test.equal(2, find(function(x) {return x % 2 === 0;}, [1, 2, 3]));
  test.done();
};

exports.testTwo = function(test) {
  test.equal(undefined, find(function(x) {return x % 2 === 0;}, [1, 5, 3]));
  test.done();
};

exports.testThree = function(test) {
  test.equal(3, find(function(x) {return x % 2 !== 0;}, [4, 2, 3]));
  test.done();
};

exports.testFour = function(test) {
  test.equal(undefined, find(function(x) {return x % 2 !== 0;}, [2, 4, 10]));
  test.done();
};
