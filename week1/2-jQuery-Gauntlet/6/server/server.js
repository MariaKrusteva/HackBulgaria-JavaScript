"use strict";
// trying to start this file but something's not working?
// try npm install first

var express = require('express');
var app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

var tasks = [
  {"id": 1, "task":"Smile"},
  {"id": 2, "task": "Be happy"},
  {"id": 3, "task": "Love what you do"},
  {"id": 4, "task": "Do what you love"},
  {"id": 5, "task": "Appreciate people"},
  {"id": 6, "task": "Be good"},
  {"id": 7, "task": "Call your parents and say you love them"},
  {"id": 8, "task": "Live"},
  {"id": 9, "task": "Be proud of yourself"},
  {"id": 10, "task": "Don't regret anything"}
  ];

app.get('/tasks', function(req, res){
  res.json(tasks);
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
