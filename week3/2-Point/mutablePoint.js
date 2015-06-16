/*global console*/
"use strict";
function MutablePoint3D(x, y, z) {

  this.getX = function(){
    return x;
  };

  this.getY = function(){
    return y;
  };

  this.getZ = function(){
    return z;
  };

  this.move = function(dx, dy, dz) {
    x += dx;
    y += dy;
    z += dz;
  }

}

MutablePoint3D.prototype.toString = function() {
  return "(" + this.getX() + ", " + this.getY() + ", " + this.getZ() + ")";
};

var p1 = new MutablePoint3D(0, 0, 0);

p1.move(0, 0, -1);

console.log(p1.getX() === 0); // true
console.log(p1.getY() === 0); // true
console.log(p1.getZ() === -1); // true

console.log(p1.toString() == "(0, 0, -1)"); // true
