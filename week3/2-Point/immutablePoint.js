/*global console*/
"use strict";
function ImmutablePoint3D(x, y, z) {

  this.getX = function(){
    return x;
  };

  this.getY = function(){
    return y;
  };

  this.getZ = function(){
    return z;
  };
}

ImmutablePoint3D.prototype.toString = function() {
  return "(" + this.getX() + ", " + this.getY() + ", " + this.getZ() + ")";
};

ImmutablePoint3D.prototype.move = function(dx, dy, dz) {
  return new ImmutablePoint3D(this.getX() + dx, this.getY() + dy, this.getZ() + dz);
};

var p2 = new ImmutablePoint3D(0, 0, 0);

var result = p2.move(0, 0, -1);

console.log(p2.getX() === 0); // true
console.log(p2.getY() === 0); // true
console.log(p2.getZ() === 0); // true


console.log(result.getZ() == -1); // true

console.log(p2.toString() == "(0, 0, 0)"); // true
console.log(result.toString() == "(0, 0, -1)");// true
