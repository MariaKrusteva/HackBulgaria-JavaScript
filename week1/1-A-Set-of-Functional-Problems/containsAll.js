"use strict";
var contains = require("./contains").contains;


var containsAll = function(elements, arr) {
  return elements.every(function(x){
    return contains(x, arr);
  });
};

exports.containsAll = containsAll;
