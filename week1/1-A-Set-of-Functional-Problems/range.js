"use strict";

var range = function(from, to) {
  if(from > to) {
    return [];
  }
  if(from === to) {
    return [from];
  }

  return [from].concat(range(from + 1, to));

};

exports.range = range;
