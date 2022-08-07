// VARIABLES

const inputArray = [];
const inputDisplay = document.querySelector('.display');
let operatorChosen = false;

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
function setInput(input) {

  inputArray.push(input); // add input to array

  const regEx = /[+\-*\/]/g; // operators (+-*/)
  const inputString = (inputArray.join('').toString()); // array to string

  console.log(inputString + ' ' + inputString.search(regEx));
  console.log(inputArray);

  if (operatorChosen === false) {
    if (inputString.search(regEx) < 0) { // search(regEx) returned -1 > no operator was chosen > write to display
      writeDisplay(inputArray.join(''));
    } else {
      operatorChosen = true;
    }
  } else {
    writeDisplay(inputArray.join('').slice((inputString.search(regEx) + 1), inputArray.length)); // write to display after operator
  }
}
// --------------------------------------------
function writeDisplay(value) {
  inputDisplay.textContent = value;
}
// --------------------------------------------
function clearAll() {
  inputDisplay.textContent = '0'; //clear display
  inputArray.length = 0; // clear array
  operatorChosen = false;

  console.clear();
  console.log(inputArray);
}
// --------------------------------------------

// Console Logs

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
