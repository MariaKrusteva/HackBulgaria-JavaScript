require(["matrix", "matrixoperations"], function(Matrix, MatrixOperations) {
  var M1 = new Matrix(3, 5);
  M1.setRow(0, [1,2,3,4,5]);
  M1.setCol(1, [1,1,1]);
  M1.setRow(4, [1,2,3,4,5]);
  M1.setAt(0,0,250);

  var M2 = new Matrix(3, 3);
  var operation = new MatrixOperations()
  var newM = operation.createFromArray([[1,2,3],[4,5,6],[7,8,9]]);
  var transpose = operation.transpose(newM);
  var addition = operation.add(M2, newM);
  var scalar = operation.scalarMult(2, newM);
  var mult = operation.multiply(M2, newM);

  console.log(scalar.toString());
});
