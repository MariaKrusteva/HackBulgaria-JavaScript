"use strict";

var sum = require("./sum").sum;

exports.testWithNumbers = function(test){
  test.equal(3, sum(1, 2));
  test.done();
};

exports.testWithBigNumbers = function(test){
  test.equal(20000, sum(10000, 10000));
  test.done();
};

exports.testThrows = function(test) {
  test.throws(function() {
    sum("a", 3);
  });
  test.done();
};
