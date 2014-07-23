$(document).ready(function (){
  "use strict";
  var canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 400;
  var context = canvas.getContext('2d');
  context.fillStyle = "black";

  var height = canvas.height,
      width = canvas.width;
  var points = [],
      name;

  function Point(x, y, context){
    this.x = x;
    this.y = y;
    this.context = context;

  }

  var drawTriangle = function(points){
    context.beginPath();
    var a = points.pop();
    context.moveTo(a.x, a.y);
    var b = points.pop();
    context.lineTo(b.x, b.y);
    var c = points.pop();
    context.lineTo(c.x, c.y);
    context.fill();
  }

  $("#canvas").on("click", function(){
    var x = event.pageX;
    var y = event.pageY;
    var point = new Point(x, y, context);
    points.push(point);
    if (points.length === 3){
      drawTriangle(points);
    }
  })

  $("#triangle-color").on("change", function(){
    context.fillStyle = this.value;
  })

  $("#btn-clear").on("click", function(){
    context.clearRect(0, 0, width, height);
  })

  $("#btn-save").on("click", function(){
    name = prompt("Name for the picture:")
    localStorage.setItem(name, canvas.toDataURL());
    $("#img-load").append("<option>" + name + "</option>");
  })

  $("#img-load").on("click", function(){
    name = this.value;
  })

  $("#btn-load").on("click", function(){
    context.clearRect(0, 0, width, height);
    var img = new Image();
    img.onload = function(){
      context.drawImage(img,0,0);
    }
    img.src = localStorage.getItem(name);
  })



})
