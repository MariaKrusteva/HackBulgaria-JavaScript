/* global $, Handlebars */
$(document).ready(function(){
  "use strict";

  var fillInput = function(data){

    var template = $("#template").html();
    var f = Handlebars.compile(template);
    var context = {input: data};
    $("#names").append(f(context));
  };

  var listAll = function(){
    $.ajax({
      url: "http://localhost:8080/names",
      type: "GET"
    }).done(function(result){
      fillInput(result);
    });
  }

  listAll();

  var update = function(name, id){

    $.ajax({
      url: "http://localhost:8080/name",
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({
        "name": name,
        "nameId": id
      })
    }).done(function(){
        $("#names").empty();
        listAll();
      })
  };

  $(document).on("change", ".input", function(){
    var name = $(this).val();
    var id = $(this).attr("id");
    $("#btn-" + id).removeAttr("disabled");

    $("#btn-" + id).on("click", function(){
      update(name, id);
    });



  });

});
