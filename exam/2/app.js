"use strict";

$(document).ready(function() {

  var time;

  var minutes = $("#minutes").val(),
      seconds = $("#seconds").val();

  var setTime = function(minFirst, minSecond, secFirst, secSecond){
    $("#minutes-first-digit").text(minFirst);
    $("#minutes-second-digit").text(minSecond);
    $("#seconds-first-digit").text(secFirst);
    $("#seconds-second-digit").text(secSecond);
  };

  setTime(0,0,0,0);


  $("#btn-up").on("click", function(){
    var countingMinutes = 0,
        countingSeconds = 0;

    time = window.setInterval(function(){
      countingSeconds += 1;

      if(countingSeconds > 59) {
        countingMinutes += 1;
        countingSeconds = 0;
      }

      if(countingSeconds >= seconds && countingMinutes >= minutes){
        window.clearInterval(time);
      }

      setTime(parseInt(countingMinutes/10, 10),
              countingMinutes%10,
              parseInt(countingSeconds/10, 10),
              countingSeconds%10);
    }, 1000);
  });

  $("#btn-down").on("click", function(){
    var countingMinutes = minutes,
        countingSeconds = seconds;

    time = window.setInterval(function(){
      countingSeconds -= 1;

      if(countingSeconds < 0) {
        countingMinutes -= 1;
        countingSeconds = 59;
      }

      if(countingSeconds <= 0 && countingMinutes <= 0){
        window.clearInterval(time);
      }

      setTime(parseInt(countingMinutes/10, 10),
              countingMinutes%10,
              parseInt(countingSeconds/10, 10),
              countingSeconds%10);
    }, 1000);
  });

  $(".btn-danger").on("click", function(){
    setTime(0, 0, 0, 0);
    window.clearInterval(time);
  });

});
