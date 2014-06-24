"use strict";

var calculateMaxScore = function(arr1, arr2){

  if(arr1.length === 0 || arr2.length === 0){
    return 0;
  }

  if(arr1.length === 1 || arr2.length === 1){
    return arr1[0] * arr2[0];
  }

  return arr1.shift() * arr2.shift() + calculateMaxScore(arr1, arr2);
};

var beerAndFries = function (items) {
  var beerScores = [],
      friesScores = [];
  items.forEach(function(item){
    if (item.type === "beer") {
      beerScores.push(item.score);
    }
    else {
      friesScores.push(item.score);
    }
  });

  return calculateMaxScore(beerScores.sort(function(a, b){
    return a - b;
  }), friesScores.sort(function(a, b){
    return a - b;
  }));
};

exports.beerAndFries = beerAndFries;
