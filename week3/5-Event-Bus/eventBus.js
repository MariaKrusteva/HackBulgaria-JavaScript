/*globals console*/
"use strict";

var bus = (function(){
  var events = {};
  return {
    on: function(eventName, callback) {
      if(events[eventName]){
        events[eventName].push(callback);
      }
      else{
        events[eventName] = [callback];
      }
    },
    remove: function(eventName) {
      events[eventName] = [];
    },
    trigger: function(eventName) {
      if(typeof events[eventName] === undefined){
        console.log("No such event!");
      }
      else {
        events[eventName].forEach(function(callback) {
          callback();
        });
      }
    }
  };

}());

bus.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED!");
});

bus.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED AGAIN!");
});

bus.trigger("PANIC_EVENT");
