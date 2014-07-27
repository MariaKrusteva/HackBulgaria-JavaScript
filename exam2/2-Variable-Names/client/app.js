/* global $, Handlebars */
$(document).ready(function(){
  "use strict";
  var baseUrl = "http://localhost:8080";

  function fillInput(data){
    var
      template = $("#template").html(),
      f = Handlebars.compile(template),
      context = {input: data};
    $("#names").append(f(context));
  };

  function listAll(){
    $.ajax({
      url: baseUrl + "/names",
      type: "GET"
    }).done(function(result){
      fillInput(result);
    });
  }

  listAll();

  function update(name, id){
    $.ajax({
      url: baseUrl + "/name",
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

  $(document).on("click", "button", function() {
    var
      $input = $(this).parent().find(".input"),
      name = $input.val(),
      nameId = $input.attr("id");

    console.log(name, nameId);
    update(name, nameId)
  });

  $(document).on("change", ".input", function(){
    var id = $(this).attr("id");
    $("#btn-" + id).removeAttr("disabled");
  });

});
