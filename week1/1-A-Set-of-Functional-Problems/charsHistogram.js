"use strict";

var countSubstrings = function(haystack, needle) {
    return (haystack.match(new RegExp(needle, "g")) || []).length;
}

function charsHistogram(str) {
  var chars = str.toLowerCase().replace(/[^\w\s]/gi, "").replace(/\s/g, "").split(""),
      result = {},
      str = str.toLowerCase();
  chars.forEach(function(char) {
    result[char] = countSubstrings(str, char);
  });
  return result;
}

exports.charsHistogram = charsHistogram;
