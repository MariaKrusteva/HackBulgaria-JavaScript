"use strict";

function groupBy(groupingFunction, arr) {
  var result = {};

  arr.forEach(function(student){
    if(result[groupingFunction(student)]) {
      result[groupingFunction(student)].push(student);
    }
    else {
      result[groupingFunction(student)] = [student];
    }
  });
  return result;
};

function makeHead(){
  return "<thead>\n<tr>\n<th>Id</th>\n<th>Name</th>\n<th>Course</th>\n</tr>\n</thead>"
}

function makeBody(arr) {
  var result = "<tbody>";
  arr.forEach(function (object) {
    result += "<tr id=" + object.id + ">\n";
    Object.keys(object).forEach(function(key) {
      result += "<td>" + object[key] + "</td>";
    })
    result += "</tr>\n";
  })
  return result + "</tbody>";
}

function makeTable(arr) {
  return "<table>\n" + makeHead() + makeBody(arr) + "\n</table>";
}

function check(searched, students) {
  var id;
  students.forEach(function(student) {
    if(student.name.indexOf(searched) > -1){
      id = student.id;
    }
  })
  return id;
}


$(document).ready(function() {

  $.getJSON('http://localhost:3000/students', function(students, textStatus) {

    $(".container").append($(makeTable(students)).addClass("table table-hover"));

    $("#group-btn").on("click", function() {

      $(".container").empty();
      var groupedStudents = groupBy(function(student) {
        return student.course;
      }, students);

      Object.keys(groupedStudents).forEach(function (course){
        $(".container").append($(makeTable(groupedStudents[course])).addClass("table table-hover"));
      })

    });

    $("#search-btn").on("click", function() {
      var searched = $("#search-box").val();
      var id = check(searched, students);
      $("#" + id).addClass("success");
    })
  });

});
