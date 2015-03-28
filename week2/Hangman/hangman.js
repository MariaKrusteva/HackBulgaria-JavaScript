/*global require, console*/
"use strict";
var prompt = require("prompt");

function getHangman(step){
  var result = "";
  switch(step){
    case 1:
      result += "\n \n|   \n|   \n|  \n|   \n";
      break;
    case 2:
      result += "\n ____\n|   \n|   \n|  \n|   \n";
      break;
    case 3:
      result += "\n ____\n|   |\n|   \n|  \n|   \n";
      break;
    case 4:
      result += "\n ____\n|   |\n|   O\n|    \n|   \n";
      break;
    case 5:
      result += "\n ____\n|   |\n|   O\n|  /  \n|  \n";
      break;
    case 6:
      result += "\n ____\n|   |\n|   O\n|  / \\ \n|   \n";
      break;
    case 7:
      result += "\n ____\n|   |\n|   O\n|  /|\\ \n|   \n";
      break;
    case 8:
      result += "\n ____\n|   |\n|   O\n|  /|\\ \n|  /  \n";
      break;
    case 9:
      result += "\n ____\n|   |\n|   O\n|  /|\\ \n|  / \\ \n";
      break;
  }
  return result;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function getRandomWord(words){
  return words[getRandomInt(0, words.length-1)];
}

var words = ["python", "pep8", "anaconda", "linux"],
    wordToGuess = getRandomWord(words),
    currentWord = [];

wordToGuess.split("").forEach(function(){
  currentWord.push("~");
});

function startGame(mistakes, currentWord){
  //console.log(wordToGuess);
  var wordInArray = wordToGuess.split("");
  console.log("Your current state: " + currentWord.join(""));

  if(mistakes === 10) {
    console.log("You didn't guess the word: ", wordToGuess);
    return;
  }

  if(currentWord === wordToGuess){
    console.log("You win!");
    return;
  }

  prompt.start();

  prompt.get(["letter"], function (err, result) {
    var letter = result.letter;

    if(wordInArray.indexOf(letter) !== -1) {
      wordInArray.forEach(function(el,index){
        if(letter === el){
          currentWord[index] = letter;
        }
      });
      startGame(mistakes, currentWord);
    }
    else{
      console.log("Ooops! Try again!");
      console.log(getHangman(mistakes));
      startGame(mistakes + 1, currentWord);
    }

  });
}

startGame(1, currentWord);
