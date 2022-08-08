// VARIABLES

const inputArray = [];
const inputDisplay = document.querySelector('.display');

// SELECTORS & EVENT LISTENERS

// numeric buttons
const btnOne = document.querySelector('#one');
btnOne.addEventListener('click', () => { setInput('1') });
const btnTwo = document.querySelector('#two');
btnTwo.addEventListener('click', () => { setInput('2') });
const btnThree = document.querySelector('#three');
btnThree.addEventListener('click', () => { setInput('3') });
const btnFour = document.querySelector('#four');
btnFour.addEventListener('click', () => { setInput('4') });
const btnFive = document.querySelector('#five');
btnFive.addEventListener('click', () => { setInput('5') });
const btnSix = document.querySelector('#six');
btnSix.addEventListener('click', () => { setInput('6') });
const btnSeven = document.querySelector('#seven');
btnSeven.addEventListener('click', () => { setInput('7') });
const btnEight = document.querySelector('#eight');
btnEight.addEventListener('click', () => { setInput('8') });
const btnNine = document.querySelector('#nine');
btnNine.addEventListener('click', () => { setInput('9') });

// operand buttons
const btnAdd = document.querySelector('#add');
btnAdd.addEventListener('click', () => { setInput('+') });
const btnSubtract = document.querySelector('#subtract');
btnSubtract.addEventListener('click', () => { setInput('-') });
const btnMultiply = document.querySelector('#multiply');
btnMultiply.addEventListener('click', () => { setInput('*') });
const btnDivide = document.querySelector('#divide');
btnDivide.addEventListener('click', () => { setInput('/') });

// special buttons
const btnEquals = document.querySelector('#equals');
btnEquals.addEventListener('click', () => processSolution());
const btnAC = document.querySelector('#allclear');
btnAC.addEventListener('click', () => clearAll());

// --------------------------------------------
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
function processSolution() {
  let operandX = 0;
  let operandY = 0;
  let operator = '';


  operandX = parseInt(inputArray.join('').slice(0, getOperatorPos()));
  operandY = parseInt(inputArray.join('').slice((getOperatorPos() + 1), inputArray.length));
  operator = inputArray.join('').slice(getOperatorPos(), getOperatorPos() + 1);

  console.log('processSolution() >>> operandX: ' + operandX + ' | operator: ' + operator + ' | operandY: ' + operandY);
  console.log(inputArray);

  writeDisplay(operate(operandX, operandY, operator));

}
// --------------------------------------------
function setInput(input) {

  inputArray.push(input); // add input to array

  // console.log(inputArray);
  // console.log('getOperatorPos(): ' + getOperatorPos());

  if (getOperatorPos() < 0) { // no operator in array (-1)
    writeDisplay(inputArray.join('')); // write numbers without separators
  } else if ((getOperatorPos() + 1) === inputArray.length) { // last element in array is an operator
    writeDisplay(inputArray.join('').slice(0, inputArray.length - 1)); // write numbers before operator to preserve display
  } else {
    writeDisplay(inputArray.join('').slice((getOperatorPos() + 1), inputArray.length)); // write numbers after operator
  }
}
// --------------------------------------------
function getOperatorPos() {
  const regEx = /[+\-*\/]/g; // regular expression for the operators (+-*/)
  const inputString = (inputArray.join('').toString()); // convert inputArray to inputString

  return inputString.search(regEx); // returns position of operator (-1 if no operator is set)
}
// --------------------------------------------
function writeDisplay(value) {
  inputDisplay.textContent = value;
}
// --------------------------------------------
function clearAll() {
  inputDisplay.textContent = '0'; //clear display
  inputArray.length = 0; // clear array

  console.clear();
  console.log(inputArray);
}
// --------------------------------------------

// Console Tests

// const testSum = new Calc(3, 4);
// console.log('Add: ' + testSum.add());
// const testSub = new Calc(9, 4);
// console.log('Subtract: ' + testSub.subtract());
// const testMul = new Calc(5, 5);
// console.log('Multiply: ' + testMul.multiply());
// const testDiv = new Calc(100, 10);
// console.log('Divide: ' + testDiv.divide());

// console.log(operate(3, 4, '+'));
// console.log(operate(9, 4, '-'));
// console.log(operate(5, 5, '*'));
// console.log(operate(100, 10, '/'));
