"use strict";

var data = require("./data");
var _ = require("lodash");

var corruptedData = function(data){
  var result = [];
  var grouped = _.groupBy(data, function(item){return item.fields.student + "-" + item.fields.date;});
  Object.keys(grouped).forEach(function(key){
    if(grouped[key].length > 1){
      grouped[key].shift();
      result.push(grouped[key]);
    }
  });
  return _.flatten(result);
};

exports.corruptedData = corruptedData;
