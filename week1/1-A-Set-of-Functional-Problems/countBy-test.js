"use strict";

var countBy = require("./countBy").countBy;

exports.testOne = function(test) {
  var students = [{
    "name" : "Daniel Taskoff",
    "course" : "Frontend JavaScript"
  }, {
    "name" : "Elena Jeleva",
    "course" : "Programming 101"
  }, {
    "name" : "Luboslava Dimitrova",
    "course" : "Frontend JavaScript"
  }, {
    "name" : "Anton Antonov",
    "course" : "Core Java"
  }, {
    "name" : "Nikola Dichev",
    "course" : "Core Java"
  }];


  var result = {
    "Frontend JavaScript": 2,
    "Programming 101": 1,
    "Core Java": 2
  };

  test.deepEqual(result, countBy(function(student) {
    return student.course;
  }, students));
  test.done();
};
