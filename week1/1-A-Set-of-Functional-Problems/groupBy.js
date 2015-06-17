"use strict";

var groupBy = function(groupingFunction, arr) {
  var result = {};

  arr.forEach(function(student){
    if(result[groupingFunction(student)]) {
      result[groupingFunction(student)].push(student);
    }
    else {
      result[groupingFunction(student)] = [student];
    }
  });
  return result;
};

exports.groupBy = groupBy;
