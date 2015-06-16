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
    currentWord = [],
    mistakes = 1;

wordToGuess.split("").forEach(function(){
  currentWord.push("~");
});

function checkTheWord(letter, mistakes, wordToGuess, currentWord){

}


$(document).ready(function() {
  "use strict";
  $("#btn-check").on("click", function(){
    var letter = $("#letter").val();
    //console.log(letter, mistakes, wordToGuess, currentWord)
    var wordInArray = wordToGuess.split("");

    if(wordInArray.indexOf(letter) !== -1) {
      wordInArray.forEach(function(el,index){
        if(letter === el){
          currentWord[index] = letter;
        }
      });
    }
    else{
      $("#hangman-container").empty();
      $("#hangman-container").append(getHangman(mistakes));
      mistakes ++;
    }

    if(mistakes === 10) {
      alert("You didn't guess the word: ", wordToGuess);
      return;
    }

    if(currentWord.join("") === wordToGuess){
      alert("You win!");
      return;
    }

    $("#currentWord-container").empty();
    $("#currentWord-container").append("Your current state: " + currentWord.join(""));
  })

});
