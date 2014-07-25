/*global define, alert*/
"use strict";

define(function() {
  function Matrix(n, m) {

    var i = 0,
        j = 0;

    var matrix = new Array(n);
    for (i = 0; i < n; i++) {
      matrix[i] = new Array(m);
    }

    for(i=0; i<n;i++){
      for(j=0;j<m;j++){
        matrix[i][j]=0;
      }
    }

    this.getN = function() {
      return n;
    };

    this.getM = function(){
      return m;
    };

    this.getRow = function(index){
      return matrix[index].slice(0);
    };

    this.getCol = function(index){
      var col = [];
      for(i=0; i<n;i++){
        for(j=0;j<m;j++){
          if(j === index){
            col.push(matrix[i][j]);
          }
        }
      }
      return col;
    };

    this.setRow = function(index, row){
      if(index === n + 1){
        matrix.push(row);
        n += 1;
      }
      if(index < 0 || index > n){
        alert("wrong index");
      }
      else{
        matrix[index] = row;
      }
    };

    this.setCol = function(index, col){
      if(index === n + 1){
        m += 1;
        for(i=0; i<n;i++){
          matrix[i].push(col[i]);
        }
      }
      if(index < 0 || index > n){
        alert("wrong index");
      }
      else{
        for(i=0; i<n;i++){
          for(j=0;j<m;j++){
            if(j === index){
              matrix[i][j] = col[i];
            }
          }
        }
      }
    };

    this.getAt = function(i, j){
      return matrix[i][j];
    };

    this.setAt = function(i, j, value){
      matrix[i][j] = value;
    };

    this.getData = function(){
      return matrix.slice(0);
    };

    this.toString = function(){
      var result = "";
      for(i = 0; i < n; i++){
        result += matrix[i].toString();
        result += "\n";
      }
      return result;
    };

  }


  return Matrix;
});
