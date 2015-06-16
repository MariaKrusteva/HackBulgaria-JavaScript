"use strict";

var queue = {
  arr: [],
  push : function(item){
    this.arr.push(item);
  },
  pop : function(){
    return this.arr.shift();
  },
  isEmpty : function() {
    return this.arr.length === 0;
  }
};

queue.push(1);
queue.push(2);
console.log(queue.arr);
