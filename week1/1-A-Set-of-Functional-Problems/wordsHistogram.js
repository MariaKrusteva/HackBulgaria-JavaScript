"use strict";

function countWord(word, arr) {
  return arr.filter(function(currentWord) {
    return currentWord === word;
  }).length;
}

function wordsHistogram(str) {
  var words = str.toLowerCase().replace(/[^\w\s]/gi, "").split(" "),
      result = {},
      str = str.toLowerCase();
  words.forEach(function(word) {
    result[word] = countWord(word, words);
  });
  return result;
}

exports.wordsHistogram = wordsHistogram;
