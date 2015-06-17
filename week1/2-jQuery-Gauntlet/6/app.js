"use strict";

$(document).ready(function() {

  var
    leftTasks = [],
    rightTasks = [];

  function initAll(tasks){

    (function() {
      tasks.forEach(function(task) {
        leftTasks.push(task);
      })
    })();

    function listAll(clas, tasks) {
      tasks.forEach(function(current) {
        $(clas).append("<option value=" + current.id + ">" + current.task + "</option>");
      });
    };

    function list(){
      $(".left-tasks").empty();
      $(".right-tasks").empty();
      listAll(".left-tasks", leftTasks);
      listAll(".right-tasks", rightTasks);
    }

    list();

    function moveTaskById(id, arrFrom, arrTo){
      arrFrom.forEach(function(task, index) {
        if(task.id == id){
          arrFrom.splice(index, 1);
          arrTo.push(task);
        }
      })
    }

    function moveTasks(ids, from, to) {
      ids.forEach(function(id) {
        if(from === "left"){
          moveTaskById(id, leftTasks, rightTasks);
        }
        else {
          moveTaskById(id, rightTasks, leftTasks);
        }
      })
    }

    $("#btn-left").on("click", function() {
      moveTasks($(".left-tasks").val(), "left", "right");
      list();
    })

    $("#btn-right").on("click", function() {
      moveTasks($(".right-tasks").val(), "right", "left");
      list();
    })

  }


  $.getJSON('http://localhost:3000/tasks', function(tasks, textStatus) {
    initAll(tasks);
  });
});
