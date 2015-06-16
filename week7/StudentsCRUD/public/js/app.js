function studentsInTable(students){
  var result = "";
  students.forEach(function(student){
    result += "<tr>\n";
    Object.keys(student).forEach(function(key){
      result += "<td>" + student[key] + "</td>\n"
    })
    result += "</tr>\n"
  })
  return result;
}

function create(){
  var id = $("#id").val();
  var name = $("#name").val();
  var email = $("#email").val();
  var classes = $("#classes").val();
  var gitRepo = $("#repo").val();

  $.ajax({
      type: "POST",
      url: "http://localhost:1337/students",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({
        "id": id,
        "name": name,
        "email": email,
        "classes": classes.split(" "),
        "gitRepo": gitRepo
      })
  });

  $("#id").val("");
  $("#name").val("");
  $("#email").val("");
  $("#classes").val("");
  $("#repo").val("");
}

function update(id){
  var name = $("#name").val();
  var email = $("#email").val();
  var classes = $("#classes").val();
  var gitRepo = $("#repo").val();

  $.ajax({
      type: "PUT",
      url: "http://localhost:1337/students/" + id,
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({
        "id": id,
        "name": name,
        "email": email,
        "classes": classes.split(" "),
        "gitRepo": gitRepo
      })
  });

  $("#id").val("");
  $("#name").val("");
  $("#email").val("");
  $("#classes").val("");
  $("#repo").val("");
}

function deleteStudent(id){
  $.ajax({
    url: "http://localhost:1337/students/" + id,
    type: "DELETE"
  });
}

$(document).ready(function() {
  "use strict";


  $.getJSON("http://localhost:1337/students", function(students) {
    $("#container").append(studentsInTable(students));

  })

  $("#refresh-button").on("click", function(){
    $("#container").html("");
    $.getJSON("http://localhost:1337/students", function(students) {
      $("#container").append(studentsInTable(students));

    })
  })

  $("#add-button").on("click", function(){
    create();
  })

  $("#update-button").on("click", function(){
    var id = $("#id").val();
    update(id);
  })

  $("#delete-button").on("click", function(){
    var id = $("#id").val();
    deleteStudent(id);
  })




});
