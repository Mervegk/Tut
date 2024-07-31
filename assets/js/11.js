const array1 = [1, 2, 3];
const array2 = array1.slice();
array2.push(4);
console.log(array1);
console.log(array2);

const [firstValue, secondValue] = [1, 2, 3];
/* for (let i = 1; i < 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
  if (i === 8) {
    break;
  }
} */

let i = 1;
while (i <= 10) {
  if (i % 3 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
function doublearray(nums) {
  const myNumbersDoubled = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num === 0) {
      return myNumbersDoubled;
    }
    myNumbersDoubled.push(num * 2)
  }

  return myNumbersDoubled;
}
console.log(doublearray([4, 3, 6]));
console.log(doublearray([32, 15, 0]));



/* const myNumbers = [1, 1, 3];
let total = 0;

for (let i = 0; i < myNumbers.length; i++) {
  const num = myNumbers[i];
  total += num;
}
console.log(total);

const myNumbersDoubled = [];

for (let i = 0; i < myNumbers.length; i++) {
  const num = myNumbers[i];
  myNumbersDoubled.push(num * 2)
}
console.log(myNumbersDoubled); */

/*   const todoList = ['iş bul', 'acil iş bul', 'su iç'];
 
     for (let i = 0; i < todoList.length; i++) {
       console.log(todoList[i]);
     } */

/* let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
} */

/* for (let i = 1; i <= 5; i++) {
  console.log(i);
} */

/*  const myArray = [10, 20, 30];
 console.log(myArray);
 console.log(myArray[0]);
 myArray[0] = 99;
 console.log(myArray);
 
 [1, 'hello', true, { name: 'socks' }, [1, 2]]
 
 console.log(typeof [1, 2]);
 console.log(Array.isArray([1, 2]))
 
 console.log(myArray.length);
 myArray.push(100)
 console.log(myArray);
 myArray.splice(0, 1)
 console.log(myArray); */