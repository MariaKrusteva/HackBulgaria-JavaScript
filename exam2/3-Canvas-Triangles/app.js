/* global $, Handlebars, prompt */

$(document).ready(function (){
  "use strict";
  var
    canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    height = 400,
    width = 800,
    points = [],
    allItems = [],
    name;

  canvas.height = height;
  canvas.width = width;
  context.fillStyle = "black";

  function Point(x, y, context){
    this.x = x;
    this.y = y;
    this.context = context;

  }

  function drawTriangle(points){
    context.beginPath();
    var a = points.pop();
    context.moveTo(a.x, a.y);
    var b = points.pop();
    context.lineTo(b.x, b.y);
    var c = points.pop();
    context.lineTo(c.x, c.y);
    context.fill();
  }

  function parse(){
    return JSON.parse(localStorage.saves);
  }

  (function getAllItems() {
    var saves = parse() || {};
    Object.keys(saves).forEach(function(saveName) {
      allItems.push({name: saveName});
    });
  }());

  function loadAllImages(data){
    var
      template = $("#template").html(),
      f = Handlebars.compile(template),
      context = {items: data};
    $("#img-load").append(f(context));
  }

  loadAllImages(allItems);


  $("#canvas").on("click", function(){
    var
      x = event.pageX,
      y = event.pageY,
      point = new Point(x, y, context);
    points.push(point);
    if (points.length === 3){
      drawTriangle(points);
    }
  });

  $("#triangle-color").on("change", function(){
    context.fillStyle = this.value;
  });

  $("#btn-clear").on("click", function(){
    context.clearRect(0, 0, width, height);
  });


  $("#btn-save").on("click", function(){
    name = prompt("Name for the picture:");
    if(!localStorage.saves){
      localStorage.saves = JSON.stringify({});
    }
    var saves = parse();
    saves[name] = canvas.toDataURL();
    localStorage.saves = JSON.stringify(saves);
    allItems.push({"name": name});

    $("#img-load").empty();
    loadAllImages(allItems);
  });

  $("#img-load").on("click", function(){
    name = this.value;
  });

  $("#btn-load").on("click", function(){
    context.clearRect(0, 0, width, height);
    var
      img = new Image(),
      saves = parse();
    img.onload = function(){
      context.drawImage(img,0,0);
    };
    img.src = saves[name];
  });

});
