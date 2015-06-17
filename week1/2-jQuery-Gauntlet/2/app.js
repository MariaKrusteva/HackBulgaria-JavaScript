"use strict";

$(document).ready(function() {

  var allParagraphs = [];

  $("p").each(function(index, elem) {
    allParagraphs.push($(elem).attr("class"));
  });


  //var classes = [".first", ".second", ".third"];
  var HIGHLIGHT = "highlight";

  $("#btn").on("click", function() {

    $("." + HIGHLIGHT).removeClass(HIGHLIGHT);

    var toPush = allParagraphs.shift();
    var toHighlight = "." + toPush;

    $(toHighlight).addClass(HIGHLIGHT);
    allParagraphs.push(toPush);

  });

});
