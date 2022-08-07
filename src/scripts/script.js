class Calc {
  constructor(operandX, operandY) {

    this.operandX = operandX;
    this.operandY = operandY;

    this.add = function () {
      return this.operandX + this.operandY;
    };

    this.subtract = function () {
      return this.operandX - this.operandY;
    };

    this.multiply = function () {
      return this.operandX * this.operandY;
    };

    this.divide = function () {
      return this.operandX / this.operandY;
    };
  };
};
// --------------------------------------------
function operate(operandX, operandY, operator) {

  const operation = new Calc(operandX, operandY);

  switch (operator) {
    case '+':
      return operation.add();
    case '-':
      return operation.subtract();
    case '*':
      return operation.multiply();
    case '/':
      return operation.divide();
  }
}
// --------------------------------------------
// Console Tests

const testSum = new Calc(3, 4);
console.log('Add: ' + testSum.add());
const testSub = new Calc(9, 4);
console.log('Subtract: ' + testSub.subtract());
const testMul = new Calc(5, 5);
console.log('Multiply: ' + testMul.multiply());
const testDiv = new Calc(100, 10);
console.log('Divide: ' + testDiv.divide());

console.log(operate(3, 4, '+'));
console.log(operate(9, 4, '-'));
console.log(operate(5, 5, '*'));
console.log(operate(100, 10, '/'));
