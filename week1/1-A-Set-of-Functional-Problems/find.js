"use strict";

var find = function(predicate, arr) {
  var result = arr.filter(function(x){
    if(predicate(x)) {
      return x;
    }
  });
  return result[0];
};

exports.find = find;
