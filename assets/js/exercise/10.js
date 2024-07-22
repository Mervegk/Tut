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