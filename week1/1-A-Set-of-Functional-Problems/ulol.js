"use strict";

function list(type, items) {
  var result = "<" + type + "l>\n";

  items.forEach(function(item) {
    if(item.children){
      result += list(type, item.children);
    }
    result += "<li>" + item.label + "</li>\n";
  });
  result += "</" + type + "l>\n";

  return result;
}

var ul = function(items) {
  return list("u", items);
};

var ol = function(items) {
  return list("o", items);

};

exports.ul = ul;
exports.ol = ol;
