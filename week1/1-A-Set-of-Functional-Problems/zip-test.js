"use strict";

var zip = require("./zip.js").zip;

exports.testOne = function(test){
  test.deepEqual([[1, 4], [2, 5], [3, 6] ], zip([1, 2, 3], [4, 5, 6]));
  test.done();
};

exports.testTwo = function(test){
  test.deepEqual([ [1, 4, 7], [2, 5, 8], [3, 6, 9] ], zip([1, 2, 3], [4, 5, 6], [7, 8, 9]));
  test.done();
};
