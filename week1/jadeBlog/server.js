var express = require('express'),
    app = express(),
    fs = require("fs");

app.set("view engine", "jade");
app.use(express.static(__dirname + "/public"));
/*
app.get('/', function (req, res) {
  res.sendFile("index.html");
})*/

app.get("/:fileName", function(req, res, next){
  if(req.params && req.params.fileName && fs.existsSync(__dirname+"/views/"+req.params.fileName+".jade")){
    res.render(req.params.fileName);
  } else {
    next();
  }
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
