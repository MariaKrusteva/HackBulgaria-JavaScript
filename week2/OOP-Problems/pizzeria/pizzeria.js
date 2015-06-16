"use strict";

var Pizza = function(name, cost, timeToMake) {
  if(!(this instanceof Pizza)){
    return new Pizza(name, cost, timeToMake);
  }
  this.getName = function() {
    return name;
  };
  this.getCost = function() {
    return cost;
  };
  this.getTimeToMake = function() {
    return timeToMake;
  };
};


function PizzaOrder(pizza) {
  var id = generateUniqueId(),
      readyCallback;

  this.getId = function getId() {
    return id;
  };

  this.getPizza = function getPizza() {
    return pizza;
  };

  this.setCallback = function setCallback(callback) {
    readyCallback = callback;
  };

  this.getCallback = function getCallback() {
    return readyCallback;
  };
}

PizzaOrder.prototype.start = function start() {
  var timeToMake = this.getPizza().getTimeToMake(),
      order = this;

  setTimeout(function() {
    order.getCallback()(order.getPizza(), order);
  }, timeToMake);
};

PizzaOrder.prototype.ready = function ready(callback) {
  this.setCallback(callback);
};

var generateUniqueId = (function() {
  var count = 0;
  return function() {
    count = count + 1;
    return count;
  }
}());

var pizzas = [new Pizza("Vegetarian", 21, 2000 ),
              new Pizza("Calzone", 22, 3000),
              new Pizza("Peperoni", 23, 3500),
              new Pizza("Hawaii", 34, 3200),
              new Pizza("Capricciosa", 25, 3000)];
