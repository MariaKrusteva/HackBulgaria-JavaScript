"use strict";

var only = require("./only").only;

exports.testOne = function(test){
  test.equal(false, only("string", [1,2,3,4]));
  test.done();
};

exports.testTwo = function(test){
  test.equal(true, only("number", [1,2,3,4]));
  test.done();
};
