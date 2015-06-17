"use strict";

var concat = function(a, b) {
  if(typeof a !== "string" || typeof b !== "string") {
    throw new TypeError("Something is wrong with the types.");
  }
  else {
    return a + b;
  }

};

exports.concat = concat;
