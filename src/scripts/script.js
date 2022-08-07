// VARIABLES

const inputArray = [];
const inputDisplay = document.querySelector('.display');
let operatorChosen = false;

// SELECTORS & EVENT LISTENERS

// numeric buttons
const btnOne = document.querySelector('#one');
btnOne.addEventListener('click', () => { writeDisplay('1') });
const btnTwo = document.querySelector('#two');
btnTwo.addEventListener('click', () => { writeDisplay('2') });
const btnThree = document.querySelector('#three');
btnThree.addEventListener('click', () => { writeDisplay('3') });
const btnFour = document.querySelector('#four');
btnFour.addEventListener('click', () => { writeDisplay('4') });
const btnFive = document.querySelector('#five');
btnFive.addEventListener('click', () => { writeDisplay('5') });
const btnSix = document.querySelector('#six');
btnSix.addEventListener('click', () => { writeDisplay('6') });
const btnSeven = document.querySelector('#seven');
btnSeven.addEventListener('click', () => { writeDisplay('7') });
const btnEight = document.querySelector('#eight');
btnEight.addEventListener('click', () => { writeDisplay('8') });
const btnNine = document.querySelector('#nine');
btnNine.addEventListener('click', () => { writeDisplay('9') });

// operand buttons
const btnAdd = document.querySelector('#add');
btnAdd.addEventListener('click', () => { writeDisplay('+') });
const btnSubtract = document.querySelector('#subtract');
btnSubtract.addEventListener('click', () => { writeDisplay('-') });
const btnMultiply = document.querySelector('#multiply');
btnMultiply.addEventListener('click', () => { writeDisplay('*') });
const btnDivide = document.querySelector('#divide');
btnDivide.addEventListener('click', () => { writeDisplay('/') });

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
function writeDisplay(input) {

  inputArray.push(input); // add input to array

  const regEx = /[+\-*\/]/g; // operators (+-*/)
  const inputString = (inputArray.join('').toString()); // array to string

  console.log(inputString + ' ' + inputString.search(regEx));
  console.log(inputArray);

  if (operatorChosen === false) {
    if (inputString.search(regEx) < 0) { // search(regEx) returned -1 > no operator was chosen > write to display
      inputDisplay.textContent = inputArray.join('');
    } else {
      operatorChosen = true;
    }
  } else {
    inputDisplay.textContent = inputArray.join('').slice((inputString.search(regEx) + 1), inputArray.length); // write to display after operator
  }
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
