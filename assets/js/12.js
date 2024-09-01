/* function greeting() {
  console.log('Hello');
}
greeting();
const num = 2;
const function1 = function () {
  console.log('Hello2');
};
console.log(function1);
console.log(typeof function1);
function1();

const object1 = {
  num: 2,
  fun: function () {
    console.log('Function in object')
  }
}
object1.fun();

function run(param) {
  param();
}
run(function () {
  console.log('Hello 4');
}) */

/* setTimeout(function () {
  console.log('Time Out');
  console.log('Time Out 2');
}, 2000);
console.log('Next line');

setInterval(function () {
  console.log('Interval')
}, 2000);
console.log('Next Line 2') */

/* [
  'make dinner',
  'wash dishes',
  'watch youtube'
].forEach((value, index) => {
  if (value === 'wash dishes') {
    return;
  }
  console.log(index);
  console.log(value);
})


const arrowFuntion = () => {
  console.log('Hello');
};
arrowFuntion();

const oneParam = param => {
  console.log(param + 1);
}
oneParam(2)

const oneLine = () => console.log(2 + 3);
oneLine(); */

/* const object2 = {
  method: () => { },

  //This is recommended method for passing a method inside an object
  method() { }
} */


const buttonElement = document.querySelector('.js-button');
const eventListener = () => {
  console.log('Click')
};

buttonElement.addEventListener('click', eventListener);

buttonElement.removeEventListener('click', eventListener)

buttonElement.addEventListener('click', () => {
  console.log('Click 2')
});