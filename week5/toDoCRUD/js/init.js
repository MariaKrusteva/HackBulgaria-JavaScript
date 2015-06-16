"use strict"

$(document).ready(function(){

  $("#add-button").on("click", function() {
    var text = $("#task-name").val();
    $("#task-name").val("");
    TodoApp.addTask(text);
    TodoApp.displayList("ulContainer");
  })


})
