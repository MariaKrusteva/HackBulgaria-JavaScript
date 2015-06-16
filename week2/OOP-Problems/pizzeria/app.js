function getRandomInt(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

var getRandomPizza = function() {
  return pizzas[getRandomInt(0, pizzas.length)];
}

var makeRandomOrder = function() {
  var order = new PizzaOrder(getRandomPizza());
  order.start();
  order.ready(function(p, o) {
    alert("Your pizza " + p.getName() + " with id = " + o.getId() + " is ready!");
  });
}

$(document).ready(function() {
  $("#make-pizza").on("click", function() {
    makeRandomOrder();
  })
})
