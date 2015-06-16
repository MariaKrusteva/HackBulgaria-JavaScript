$(document).ready(function() {
  "use strict";

  var id = 0;

  $("#add-button").on("click", function() {
    var
      text = $("#task-name").val(),
      input = $("<span>" + text + "</span>"),
      span = $("<input type=\"checkbox\">"),
      li = $("<li id=" + id + "></li>");

    $(li).append(span);
    $(li).append(input);

    $("#ulContainer").append(li);
    id++;

    $(li).on("click", function() {
      var id = $(this).attr("id");
      //console.log(id);
      if($("#" + id + " input").is(":checked")){
        $(this).wrap("<strike>");
      }
      else{
        $(this).unwrap();
      }

    })

    $("#task-name").val("");
  })




});
