"use strict";

function Shape(type) {
  this.getType = function() {
    return type;
  };
}

Shape.prototype.area = function() {
  throw new Error("Cannot call area of Shape. Use subclasses!");
};

function Rectangle(a ,b){
  this.a = a;
  this.b = b;
  Shape.call(this, "Rectangle");
}

function Triangle(a, b ,c){
  this.a = a;
  this.b = b;
  this.c = c;
  Shape.call(this, "Triangle");
}

function Circle(r){
  this.r = r;
  Shape.call(this, "Circle");
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Rectangle.prototype.area = function() {
  return this.a * this.b;
};

Triangle.prototype.area = function(){
  var p = (this.a+this.b+this.c) / 2;
  return Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
};

Circle.prototype.area = function(){
  var pi = 3.14;
  return pi*this.r*this.r;
};
