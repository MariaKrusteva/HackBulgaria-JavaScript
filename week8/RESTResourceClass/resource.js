"use strict";

function Resource(url) {

  this.url = url;
}

Resource.prototype.query = function() {
  return Q($.getJSON(this.url));
}

Resource.prototype.create = function(data) {
  return Q(
    $.ajax({
      type: "POST",
      url: this.url,
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({
        "id": data.id,
        "name": data.name,
        "email": data.email,
        "classes": data.classes,
        "gitRepo": data.gitRepo
      })
  }))
}

Resource.prototype.view = function(id) {
  return Q()
}

Resource.prototype.update = function(id, data) {
  return Q(
    $.ajax({
        type: "PUT",
        url: this.url + id,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
          "id": data.id,
          "name": data.name,
          "email": data.email,
          "classes": data.classes,
          "gitRepo": data.gitRepo
        })
    })
    )
}

Resource.prototype.delete = function(id) {
  return Q(
    $.ajax({
      url: this.url + id,
      type: "DELETE"
    })
    )
}

var student = new Resource("http://localhost:1337/students");
student.query().then(function(students){
  students.forEach(function(student){
    console.log(student.name)
  });
}, function(err) {
  console.log(err);
})
