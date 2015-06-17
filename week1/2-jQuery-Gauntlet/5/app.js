"use strict";

$(document).ready(function() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function generateNumber() {
    var result = getRandomInt(10, 999999);
    $("#number").html(result);
    return result;
  }

  var
    number = generateNumber(),
    numberSoFar = "";

  function isGuessed(n) {
    return n == number;
  }

  function showNumber() {
    $("#numberSoFar").html(numberSoFar);
  }

  $(".number-button").on("click", function(){
    numberSoFar += $(this).val();
    showNumber();
    if(isGuessed(numberSoFar)) {
      alert("Congratulations!")
      number = generateNumber();
      numberSoFar = "";
      showNumber();
    }
  })

  $("#button-back").on("click", function() {
    var n = numberSoFar.length;
    numberSoFar = numberSoFar.substring(0, n- 1);
    showNumber();
  })

});
