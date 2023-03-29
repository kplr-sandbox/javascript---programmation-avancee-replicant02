const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

// code perso
const clearBtn = document.getElementById("btn-clear");
const resultBtn = document.getElementById("btn-result");

let operande1 = 0;
let operande2 = 0;
let result = 0;
let operande1ok = false;
let operation = "";

function clear() {
  operande1 = 0;
  operande2 = 0;
  result = 0;
  operande1ok = false;
  userInput.value = "";
}

function calculOperation(action) {
  switch (action) {
    case "PLUS":
      return operande1 + operande2;
      break;
    case "MINUS":
      return operande1 - operande2;
      break;
    case "MULT":
      return operande1 * operande2;
      break;
    case "DIV":
      return operande1 / operande2;
      break;
    default:
      return 0;
  }
}

userInput.addEventListener("input", (e) => {
  console.log(e.target.value);

  console.log(`operande 1 déjà rentrée ? : ${operande1ok}`);
  if (!operande1ok) {
    console.log(`Set operande1 = ${parseInt(e.target.value)}`);
    operande1 = parseInt(e.target.value);
  } else {
    console.log(`Set operande2 = ${parseInt(e.target.value)}`);
    operande2 = parseInt(e.target.value);
  }
});

clearBtn.addEventListener("click", function () {
  clear();
  console.log("CLEAR");
});

addBtn.addEventListener("click", function () {
  operande1ok = true;
  operation = "PLUS";
  console.log(operation);
});
subtractBtn.addEventListener("click", function () {
  operande1ok = true;
  operation = "MINUS";
  console.log(operation);
});
multiplyBtn.addEventListener("click", function () {
  operande1ok = true;
  operation = "MULT";
  console.log(operation);
});
divideBtn.addEventListener("click", function () {
  operande1ok = true;
  operation = "DIV";
  console.log(operation);
});

resultBtn.addEventListener("click", function () {
  document.getElementById("input-number").value = calculOperation(operation);
  console.log("CALCUL");
});
