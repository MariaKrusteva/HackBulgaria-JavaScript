var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

app.use(express.static("public"));
app.set("view engine", "jade");

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", ["X-Requested-With", "Content-Type", "Access-Control-Allow-Methods"]);
  res.header("Access-Control-Allow-Methods", ["DELETE", "PUT"]);
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());


app.get("/", function(req, res){
 res.send("Hello World\n");
});


var students = [
{"id":1, "name":"Ivan", "email":"ivan@lqlq.com", "classes": ["java"], "gitRepo":"github.com/ivan"},
{"id":2, "name":"Georgi", "email":"georgi@lqlq", "classes": ["JS"], "gitRepo":"github.com/georgi"},
{"id":3, "name":"Stamat", "email":"stamat@lqlq", "classes": ["Java", "JS"], "gitRepo":"github.com/stamat"},
{"id":4, "name":"Gergana", "email":"gergana@lqlq", "classes": ["Python", "JS"], "gitRepo":"github.com/gergana"},
{"id":5, "name":"Stoika", "email":"stoika@lqlq", "classes": ["101", "Java"], "gitRepo":"github.com/stoika"}
]


app.get("/students", function(req, res){
  res.jsonp(students);
});

function findStudentById(id){
  var result = null;
  students.forEach(function(student, index){
    if(student.id == id){
      result = index;
    }
  })
  return result;
}

app.post("/students", function(req, res){
  var student = req.body;
  console.log(student);

  students.push(student);

  res.jsonp({
  msg: "user created",
  data: student
  });
});

app.get("/students/:id", function(req, res){
  var id = req.params.id;
  res.jsonp(students[findStudentById(id)]);
});


app.put("/students/:id", function(req, res){
  var id = req.params.id;
  var index = findStudentById(id);
  var student = students[index];
  var newStudent = {};

  newStudent.id = id;
  newStudent.name = req.body.name || student.name;
  newStudent.email = req.body.email || student.email;
  newStudent.classes = req.body.classes || student.classes;
  newStudent.gitRepo = req.body.gitRepo || student.gitRepo;

  students[index] = newStudent;

  res.jsonp({
  msg: "user data updated",
  data: newStudent
  });
});


app.delete("/students/:id", function(req, res){
  var id = req.params.id;
  var index = findStudentById(id);
  if(students[index]){
    students.splice(index, 1);
    res.jsonp("user "+id+" successfully deleted!");
  }
  else {
    res.jsonp("user "+id+" does not exist!");
  }
});

var server = app.listen(1337, function() {
 console.log("Listening on port %d", server.address().port);
});

//javascript jabber
