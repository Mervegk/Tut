/* 10c */
let classListCheck = document.querySelector('.js-button');
let classListCheckResult = classListCheck.classList.contains('js-button');
console.log(classListCheckResult);

/* 10d */
function showHint() {
  let gameHint = document.querySelector('.gaming-button');

  if (!gameHint.classList.contains('is-toggled')) {
    gameHint.classList.add('is-toggled')
  }
  else if (gameHint.classList.contains('is-toggled')) {
    gameHint.classList.remove('is-toggled')
  }
}

/* 10e */
function classListOperations() {
  let threeButtons = document.querySelectorAll('.three-button');

  threeButtons.forEach((item) => {
    if (!item.classList.contains('is-toggled')) {
      item.classList.add('is-toggled');
    }
    else if (item.classList.contains('is-toggled')) {
      item.classList.remove('is-toggled');
    }
  })
}

/* 10g */
function toggleOneElement(element) {
  const toggleClassName = 'is-toggled';
  const pointElements = document.querySelectorAll(".three-button");

  pointElements.forEach((e) => {
    if (e !== element && e.classList.contains(toggleClassName)) {
      e.classList.remove(toggleClassName);
    }
  });
  element.classList.add(toggleClassName);
}

/* 10h */
function calculateTotal() {
  const inputElement = document.querySelector('.cost-input');
  const errorMessage = document.querySelector(".error-message");
  const totalCost = document.querySelector('.total-cost')

  let cost = Number(inputElement.value);

  if (cost < 40) {
    cost = cost + 10;
  }

  if (cost < 0) {
    totalCost.style.display = "none";
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "Error: cost can not be less than $0";
  }
  else {
    errorMessage.style.display = "none";
    totalCost.style.display = "block";
    totalCost.innerHTML = `$${cost}`;
  }
}

/* 10h */
const getLocal = JSON.parse(localStorage.getItem('calculation'))
console.log(getLocal);

showCalculationInPage(getLocal)

let calculation = "";
function calculator(number) {
  calculation += number;
  console.log(calculation);
  showCalculationInPage(calculation)
}

function showCalculationInPage(solution) {
  const showCalculation = document.querySelector('.display-calculation');
  showCalculation.innerHTML = solution;
}