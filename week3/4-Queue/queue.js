"use strict";

var queue = (function() {
  var arr = [];
  return {
    push: function(item) {
      arr.push(item);
    },
    pop: function() {
      return arr.shift();
    },
    isEmpty: function() {
      return arr.length === 0;
    }
  };
})();

