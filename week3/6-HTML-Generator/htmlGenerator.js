"use strict";

function Paragraph(text) {
  this.getText = function() {
    return text;
  };
}

Paragraph.prototype.render = function() {
  return "<p>" + this.getText() + "</p>\n";
};

function Div() {
  this.children = [];

  this.addChild = function(child) {
    this.children.push(child);
    return this;
  };
}

Div.prototype.render = function() {
  var result = "<div>\n";
  this.children.forEach(function(child) {
    result += child.render();
  });
  result += "</div>\n";
  return result;
};

function Table(data) {
  this.getData = function(){
    return data;
  };
}

var zip = function(items) {
  var
    result = [];

  items.forEach(function(array) {
    array.forEach(function(element, index) {
      if(result[index]){
        result[index].push(element);
      }
      else {
        result[index] = [element];
      }
    });
  });
  return result;
};

function constructHead(data) {
  var result = "<thead>\n<tr>\n";
  data.forEach(function(th) {
    result += "<th>" + th + "</th>\n";
  });
  result += "</tr>\n</thead>\n";
  return result;
}

function constructBody(data) {
  var body = "<tbody>\n";
  data.forEach(function(currentData) {
    body += "<tr>\n";
    currentData.forEach(function(td) {
      body += "<td>" + td + "</td>\n";
    });
    body += "</tr>\n";
  });
  body += "</tbody>\n";
  return body;
}

Table.prototype.render = function (){
  var data = this.getData(),
      body = null,
      toZip = [],
      bodyData = [],
      headData = [],
      head = null;
  if(! Array.isArray(data)){
    Object.keys(data).forEach(function(key) {
      toZip.push(data[key]);
      headData.push(key);
    });
    bodyData = zip(toZip);
  }
  else{
    headData = data[0];
    bodyData = data.slice(1, data.length);
  }
  head = constructHead(headData);
  body = constructBody(bodyData);
  return "<table>\n" + head + body + "</table>\n";
};

function Page(element) {
  this.getElement = function() {
    return element;
  };

}

Page.prototype.render = function() {
  return this.getElement().render();
};

