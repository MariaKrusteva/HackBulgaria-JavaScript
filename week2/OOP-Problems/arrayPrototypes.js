"use strict";

Array.prototype.range = function(from, to) {
  var result = [];
  while(from <= to) {
    result.push(from);
    from = from + 1;
  }
  return result;
};

Array.prototype.first = function(){
  if(this.length !== 0) {
    return this[0];
  }
  else {
    throw new TypeError("ERROR!!");
  }
};

Array.prototype.sum = function(){
  var sum = 0;
  this.forEach(function(x){
    sum += x;
  });
  return sum;
};

Array.prototype.average = function(){
  return this.sum() / this.length;
};

Number.prototype.times = function(action) {
  return [].range(1, this).forEach(action);
};

