"use strict";

var concat = require("./concat").concat;

exports.testWithNumbers = function(test){
  test.equal("12", concat("1", "2"));
  test.done();
};

exports.testWithBigNumbers = function(test){
  test.equal("ab", concat("a", "b"));
  test.done();
};

exports.testThrows = function(test) {
  test.throws(function() {
    concat("a", 3);
  });
  test.done();
};
