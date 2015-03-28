/*global require, console*/
"use strict";

var prompt = require("prompt"),
    jf = require("jsonfile"),
    chalk = require("chalk"),
    data = [];

function promptMenuCommand(){
  prompt.start();

  console.log("List -> enter 1");
  console.log("Add -> enter 2");
  console.log("Quit -> enter 3");
  console.log("Get -> enter 4");
  console.log("Remove -> enter 5");
  console.log("Update -> enter 6");
  console.log("Load -> enter 7");
  console.log("Save -> enter 8");
  console.log("Search -> enter 9");
  console.log("Sort -> enter 10");

  prompt.get(["choise"], function (err, result){
    switch(result.choise){
      case "1":
        listAll(data);
        break;
      case "2":
        promptAddItem();
        break;
      case "3":
        break;
      case "4":
        getById();
        break;
      case "5":
        removeById();
        break;
      case "6":
        update();
        break;
      case "7":
        loadFile();
        break;
      case "8":
        saveFile();
        break;
      case "9":
        search();
        break;
      case "10":
        sort();
        break;
    }
  });

}

function repeatString(str, n){
  var result = "";
  while(n > 0){
    result += str;
    n--;
  }
  return result;
}

function spacesTemplate(id, spaces){
  var x = spaces - id.length,
      left = x / 2,
      indentation = repeatString(" ", left);
  if (x % 2 !== 0){
    return (indentation + id + repeatString(" ", left - 1));
  }
  else {
    return (indentation + id + indentation);
  }
}

function colorTemplate(id, name, email){
  return chalk.white("|" + spacesTemplate(id, 7) + "| " +
          chalk.green(spacesTemplate(name, 20) + " | ") +
          chalk.red(spacesTemplate(email, 20) + " |"));
}

function promptAddItem(){
  var user = {};

  prompt.start();

  prompt.get(["id", "name", "email"], function (err, result) {
    user.id = result.id;
    user.name = result.name;
    user.email = result.email;

    promptMenuCommand();
  });

  data.push(user);

}

function listAll(data){
  console.log(colorTemplate(repeatString("-", 7), repeatString("-", 20), repeatString("-", 20)));
  console.log(colorTemplate("ID", "NAME", "EMAIL"));
  console.log(colorTemplate(repeatString("-", 7), repeatString("-", 20), repeatString("-", 20)));
  data.forEach(function(user){
    console.log(colorTemplate(user.id, user.name, user.email));
  });
  promptMenuCommand();
}

function getById(){
  prompt.start();
  prompt.get(["id"], function (err, result){
    data.forEach(function(user){
      if(user.id == result.id){
        console.log(user);
      }
    });
    promptMenuCommand();
  });
}

function removeById(){
  prompt.start();
  prompt.get(["id"], function (err, result){
    data.forEach(function(user, index){
      if(user.id == result.id){
        delete data[index];
      }
    });

    promptMenuCommand();
  });
}

function update(){
  prompt.start();
  prompt.get(["id","field", "value"], function (err, result){
    data.forEach( function(user){
      if(user.id == result.id){
        user[result.field] = result.value;
      }
    });
    promptMenuCommand();
  });
}

function loadFile(){
  jf.readFile("data.json", function(err, obj) {
    data = obj;
    promptMenuCommand();
  });

}

function saveFile(){
  var file = "data.json";
  jf.writeFile(file, data, function(err) {
    console.log(err);
    promptMenuCommand();
  });
}

function search(){
  prompt.start();
  prompt.get(["key"], function (err, result){
    var key = result.key;

    data.forEach(function(user){
      if(user.name.indexOf(key) >= 0 || user.email.indexOf(key) >= 0){
        console.log(user);
      }
    });
    promptMenuCommand();
  });
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    };
}

function sort() {
  prompt.start();
  prompt.get(["field"], function (err, result){
    data.sort(dynamicSort(result.field));
    promptMenuCommand();
  });
}

promptMenuCommand();
