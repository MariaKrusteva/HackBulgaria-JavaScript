"use strict";

var countBy = function(countingFunction, arr) {
  var result = {};

  arr.forEach(function(student){
    if(result[countingFunction(student)]) {
      result[countingFunction(student)] += 1;
    }
    else {
      result[countingFunction(student)] = 1;
    }
  });
  return result;
};

exports.countBy = countBy;
