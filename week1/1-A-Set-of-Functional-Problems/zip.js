"use strict";
var zip = function() {
  var
    args = Array.prototype.slice.call(arguments),
    result = [];

  args.forEach(function(array) {
    array.forEach(function(element, index) {
      if(result[index]){
        result[index].push(element);
      }
      else {
        result[index] = [element];
      }
    });
  });
  return result;


};

exports.zip = zip;
