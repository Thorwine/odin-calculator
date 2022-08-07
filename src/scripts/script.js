class Calc {
  constructor(operandX, operandY) {

    this.operandX = operandX;
    this.operandY = operandY;

    this.add = function () {
      return this.operandX + this.operandY;
    };

    this.testSubtract = function () {
      return this.operandX - this.operandY;
    };

    this.testMultiply = function () {
      return this.operandX * this.operandY;
    };

    this.testDivide = function () {
      return this.operandX / this.operandY;
    };
  };
};


// Tests

const testSum = new Calc(3, 4);
console.log(testSum.add());

const testSub = new Calc(9, 4);
console.log(testSub.testSubtract());

const testMul = new Calc(5, 5);
console.log(testMul.testMultiply());

const testDiv = new Calc(25, 5);
console.log(testDiv.testDivide());
