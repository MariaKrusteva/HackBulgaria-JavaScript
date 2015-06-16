"use strict";

String.prototype.capitalize = function(){
  return this.toUpperCase();
};

String.prototype.dasherize = function(){
  return this.replace(/_/gi, "-");
};

Array.prototype.range = function(from, to) {
  var result = [];
  while(from <= to) {
    result.push(from);
    from = from + 1;
  }
  return result;
};

String.prototype.times = function(amount) {
  var that = this;
  return [].range(1, amount).map(function(){
    return that;
  }).join(" ");
};

String.prototype.blank = function(){
  return this.length === 0 || this.indexOf(" ") === 0 && this.length ===1;
};

