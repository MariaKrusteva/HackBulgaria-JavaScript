var TodoApp = (function() {
  var tasks = [];
  var index = 0;


  var addTask = function(taskName) {
    tasks.push({
      "id": index,
      "name": taskName,
      "finished": false
    })
    index ++;
  };

  var finishTask = function(id) {
    tasks.forEach(function(task) {
      if(task.id === id){
        task.finished = !task.finished;
      }
    })
  };

  var getIndexById = function(id){
    var result = 0;
    tasks.forEach(function(task, index){
      if(task.id === id){
        result = index;
      }
    })
      return result;
  }

  var removeTask = function(id) {
    var index = getIndexById(id);
    tasks.splice(index, 1);
  }

  var displayList = function(container) {
    $("#" + container).empty();
    tasks.forEach(function(task) {

      var id = task.id;

      var li = $("<li id=" +id + "></li>");
      // if(task.finished){
      //   li.addClass("finished");
      // }
      var button = $("<button>delete</button>").attr("id", id);

      var span = $("<span>" + task.name + "</span>");

      var input = $("<input type=\"checkbox\">");

      input.on("click", function() {
        finishTask(id);
        displayList(container);
      })

      if(task.finished){
        li.addClass("finished");
        input.attr("checked", "checked");
      }

      button.on("click", function() {
        removeTask(id);
        displayList(container);
      })



    li.append(input);
    li.append(span);
    li.append(button);


    $("#" + container).append(li);




    })
  };

  return {
    addTask: addTask,
    finishTask: finishTask,
    displayList: displayList,
    removeTask: removeTask
  };
})();
