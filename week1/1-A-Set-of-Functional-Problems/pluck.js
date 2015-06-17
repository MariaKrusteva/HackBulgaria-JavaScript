"use strict";

var pluck = function(property, arr) {
  var result = [];
  arr.forEach(function(x){
    result.push(x[property]);
  });
  return result;
};

exports.pluck = pluck;
