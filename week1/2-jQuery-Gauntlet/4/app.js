"use strict";

$(document).ready(function() {

  var groupBy = function(groupingFunction, arr) {
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


  var initAll = function(students){

    var groupedStudents = groupBy(function(student) {
      return student.course;
    }, students);

    var loadCourses = (function() {
      Object.keys(groupedStudents).forEach(function(course) {
        $("#course-pick").append("<option value=" + course + ">" + course + "</option");
      });
    })();

    var listAll = function(course) {
      groupedStudents[course].forEach(function(student) {
        $("#student-pick").append("<option value=" + student.id + ">" + student.name + "</option");
      })
    }

    var listOne = function(id) {
      var result = "";
      students.forEach(function(student) {
        if(student.id == id){
          result = "GitHub for " + student.name + " is " + student.github;
        }
      })
      return result;
    }

    var listAllHelper = function(value) {
      switch(value){
        case "Programming": return "Programming 101";
        case "Frontend": return "Frontend JavaScript";
        case "Core": return "Core Java";
      }
    }

    $("#course-pick").on("change", function() {
      $("#student-pick").empty();
      listAll(listAllHelper($(this).val()));
    })

    $("#student-pick").on("change", function() {
      $("#student").html(listOne($("#student-pick").val()));
    })

  };

  $.getJSON('http://localhost:3000/students', function(students, textStatus) {
    initAll(students);
  });
});
