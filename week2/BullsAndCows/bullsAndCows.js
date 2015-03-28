/*global require, console*/
"use strict";
var prompt = require("prompt");

function numberToList(n) {
  var result = [];
  while(n !== 0)  {
    result.push(n % 10);
    n = parseInt(n / 10);
  }
  return result.reverse();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntWithoutDuplicate(){
  var result = [],
      nextDigit = null;
  result[0] = getRandomInt(1, 9);
  while(result.length < 4){
    nextDigit = getRandomInt(0,9);
    if(result.indexOf(nextDigit) === -1){
      result.push(nextDigit);
    }
  }
  return result;
}

var numberToGuess = getRandomIntWithoutDuplicate();

function getBulls(numberToGuess, number){
  var result = 0;

  //numberToGuess = numberToList(numberToGuess);
  number = numberToList(number);

  number.forEach(function(digit, index){
    if(digit === numberToGuess[index]){
      result += 1;
    }
  });
  return result;
}

//console.log("Bulls: ", getBulls(123,156));

function getCows(numberToGuess, number){
  var result = 0;

  //numberToGuess = numberToList(numberToGuess);
  number = numberToList(number);

  number.forEach(function(digit){
    if(numberToGuess.indexOf(digit) > -1){
      result += 1;
    }
  });
  return result;
}

function checkTheNumberForDuplicates(number){
  return number.length !== number.filter(function(element, index, array){
    return index === array.indexOf(element);
  }).length;
}


function startGame(n){
  //console.log(numberToGuess);
  console.log("You have ", n, "trys :)");
  if(n === 0) {
    console.log("You didn't guess the number: ", numberToGuess.join(""));
    return;
  }

  prompt.start();

  prompt.get(["number"], function (err, result) {
    var number = parseInt(result.number);

    if(!checkTheNumberForDuplicates(numberToList(number))){
      if(number >= 1000 && number <= 9999){
        if(number == numberToGuess.join("")){
          console.log("Success!");
        }
        else {
          var bulls = getBulls(numberToGuess, number),
              cows = getCows(numberToGuess, number);
          console.log("You have " + bulls + " bulls");
          console.log("You have " + (cows - bulls) + " cows");
          startGame(n - 1);
        }
      }
      else{
        console.log("You should type 4 digit number!");
        startGame(n);
      }
    }
    else {
      console.log("You must not repeat the digits!");
      startGame(n);
    }


  });
}

startGame(7);


