/*global define, alert*/
"use strict";

define(["matrix"], function(Matrix) {
  function MatrixOperations(){

    var i = 0,
        j = 0;

    this.createFromArray = function(data){
      var m = data[0].length;
      var n = data.length;
      var result = new Matrix(n, m);
      for(var i = 0; i < n; i++){
        result.setRow(i, data[i]);
      }
      return result;
    };

    this.transpose = function(M){
      M = M.getData();
      var newArray = M[0].map(function(col, i) {
        return M.map(function(row) {
          return row[i];
        });
      });
      return this.createFromArray(newArray);
    };

    this.add = function(M1, M2){
      if(M1.getN() != M2.getN() || M1.getM() != M2.getM()){
        alert("impooosssiiibleee");
      }
      M1 = M1.getData();
      M2  = M2.getData();
      var m = M1[0].length;
      var n = M1.length;
      var result = new Matrix(n, m);
      result = result.getData();
      for(i=0; i<n;i++){
        for(j=0;j<m;j++){
          result[i][j] = M1[i][j] + M2[i][j];
        }
      }
      return this.createFromArray(result);
    };

    this.scalarMult = function(scalar, M1){
      M1 = M1.getData();
      var m = M1[0].length;
      var n = M1.length;
      var result = new Matrix(n, m);
      result = result.getData();
      for(i=0; i<n;i++){
        for(j=0;j<m;j++){
          result[i][j] = M1[i][j] * scalar;
        }
      }
      return this.createFromArray(result);
    };

    this.multiply = function(M1, M2){
      M1 = M1.getData();
      M2  = M2.getData();
      var secondColumns = this.transpose(M2);
      var result =  M1.map(function(row){
          return secondColumns.map(function(column){
              return column.reduce(function(sum, value, index){
                  return sum + value * row[index];
              }, 0);
          });
      });
      return this.createFromArray(result);
    };



  }
  return MatrixOperations;
});
