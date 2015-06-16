/*global console*/
"use strict";

String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.slice(1, this.length);
};

String.prototype.isBlank = function() {
  return this.replace(/\s/g, "") === "";
};

String.prototype.words = function() {
  return this.split(" ").filter(function(el) {
    return el !== "";
  });
};

Array.prototype.head = function() {
  return this[0];
}

Array.prototype.tail = function() {
  return this.slice(1, this.length);
}

Array.prototype.last = function() {
  return this[this.length - 1];
}

Array.prototype.range = function(start, end) {
  var result = [];
  while(start <= end){
    result.push(start);
    start++;
  }
  return result;
}

Array.prototype.sum = function() {
  var result = 0;
  this.forEach(function(el) {
    if(typeof el === "number"){
      result += el;
    }
  });
  return result;
}

Array.prototype.product = function() {
  var result = 1;
  this.forEach(function(el) {
    if(typeof el === "number"){
      result *= el;
    }
  });
  return result;
}

Array.prototype.compact = function() {
  return this.filter(function(st){return st});
}

Array.prototype.take = function(number) {
  return this.slice(0, number) || this;
}

Array.prototype.drop = function(number) {
  return this.slice(number, this.length) || this;
}

Array.prototype.dedup = function() {
  return this.filter(function(el, index, arr){
    return arr.indexOf(el) === index;
  });
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Array.prototype.sample = function() {
  return this[getRandomInt(0, this.length)];
}

