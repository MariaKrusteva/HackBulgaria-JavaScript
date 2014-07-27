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

var sorting = function(arr){
  return arr.sort(function(a, b){
    return a - b;
  });
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

  return calculateMaxScore(sorting(beerScores), sorting(friesScores));
};

exports.beerAndFries = beerAndFries;
