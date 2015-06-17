"use strict";

$(document).ready(function() {

  $("#search-button").on("click", function() {
    var imageUrl = $("#search-input").val();
    var $img = $("<img>").attr("src", imageUrl);

  $img.load(function(){
    $("#gallery").append($img);
    $("#gallery").append("</br>");
  });

  $img.on("click", function(){
    $img.remove();
  });
});
});
