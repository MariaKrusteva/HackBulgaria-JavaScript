"use strict";

var contains = require("./contains").contains;

var without = function(exclude, arr) {
  return arr.filter(function(x){
    return ! contains(x, exclude);
  });
};

exports.without = without;
