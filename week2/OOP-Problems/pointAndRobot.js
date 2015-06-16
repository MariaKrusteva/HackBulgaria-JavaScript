"use strict";

function Point(x, y){
  if(!(this instanceof Point)){
    return new Point(x, y);
  }

  this.getX = function(){
    return x;
  };

  this.getY = function(){
    return y;
  };

  this.setX = function(n){
    x = n;
  };

  this.setY = function(n){
    y = n;
  };
}

Point.prototype.xInc = function(){
  this.setX(this.getX() + 1);
};

Point.prototype.xDec = function(){
  this.setX(this.getX() - 1);
};

Point.prototype.yInc = function(){
  this.setX(this.getX() + 1);
};

Point.prototype.yDec = function(){
  this.setX(this.getX() - 1);
};

Point.prototype.equals = function(point) {
  return this.getX() === point.getX() && this.getY() === point.getY();
};

Point.prototype.toString = function(){
  return "Point @ {" + this.getX() + "}, {" + this.getY() + "}";
};

function Robot(point){
  if(!(this instanceof Robot)){
    return new Robot(point);
  }

  this.getX = function(){
    return point.getX();
  };

  this.getY = function(){
    return point.getY();
  };

  this.setX = function(n){
    point.setX(n);
  };

  this.setY = function(n){
    point.setY(n);
  };

  this.moveLeft = function(amount) {
    this.setX(this.getX() - amount);
  };

  this.moveRight = function(amount) {
    this.setX(this.getX() + amount);
  };

  this.moveUp = function(amount) {
    this.setY(this.getY() + amount);
  };

  this.moveDown = function(amount) {
    this.setY(this.getY() - amount);
  };

  this.getPosition = function() {
    return point;
  }

}

var robot = new Robot(new Point(0, 0));

robot.moveLeft(10);
robot.moveDown(5);

console.log(robot.getPosition().toString());
