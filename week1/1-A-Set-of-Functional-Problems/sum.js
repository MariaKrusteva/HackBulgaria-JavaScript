"use strict";

var sum = function(a, b) {
  if(typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Something is wrong with the types.");
  }
  else {
    return a + b;
  }

};

exports.sum = sum;
