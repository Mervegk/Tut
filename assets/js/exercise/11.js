/* 11a */
const nums = [10, 20, 30];
nums[2] = 99;
console.log('11a');
console.log(nums);

/* 11b */
function getLastValue(array) {
  const lastIndex = array.length - 1;
  // console.log(array[lastIndex]);
  return array[lastIndex]
}
console.log('11b');
console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(['hi', 'hello', 'good']));

/* 11c */
function arraySwap(array) {
  const firstIndexValue = array[0];
  const lastIndexValue = array[array.length - 1];
  const lastIndex = array.length - 1;

  array[0] = lastIndexValue;
  array[lastIndex] = firstIndexValue;

  return array;
}
console.log('11c');
console.log(arraySwap([5, 20, 22, 24, 1]));
console.log(arraySwap(['hi', 'hello', 'good']));

/* 11d */
console.log('11d');
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

/* 11e */
console.log('11e');
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

/* 11f */
console.log('11f');
let i = 0;
while (i <= 10) {
  console.log(i);
  i += 2;
}
let item = 5;
while (item >= 0) {
  console.log(item);
  item--;
}

/* 11h */
function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  }

  return array;
}
console.log('11h');
console.log(addOne([1, 2, 3]));

/* 11i */
function addNum(array, num) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + num;
  }

  return array;
}
console.log('11i');
console.log(addNum([1, 2, 3], 2));

/* 11j */
function addArrays(array1, array2) {
  let totalOfArrays = [];
  for (let i = 0; i < array1.length; i++) {
    totalOfArrays.push(array1[i] + array2[i]);
  }

  return totalOfArrays;
}
console.log('11j');
console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));

/* 11k */
function countPositive(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      count++;
    }
  }

  return count;
}
console.log('11k');
console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

/* 11l */
function minMax(nums) {
  let minMaxObj = { min: null, max: null };

  /* 11m */
  if (nums == []) {
    return minMaxObj;
  }
  else if (nums.length == 1) {
    return minMaxObj = { min: nums[0], max: nums[0] }
  }
  /* 11m */

  for (let item1 = 0; item1 < nums.length; item1++) {
    for (let item2 = 0; item2 < item1; item2++) {
      if (nums[item1] < nums[item2]) {
        let temporary = nums[item1];
        nums[item1] = nums[item2];
        nums[item2] = temporary;
      }
    }
  }

  if (nums.length > 1) {
    minMaxObj.min = nums[0]
    minMaxObj.max = nums[nums.length - 1]
  }

  return minMaxObj;
}
console.log('11m');
console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
console.log(minMax([]));
console.log(minMax([3]));

/* 11n */
function countWords(words) {
  const countWordsObj = {};

  for (let item = 0; item < words.length; item++) {
    const word = words[item];
    if (countWordsObj[word]) {
      countWordsObj[word] += 1;
    }
    else {
      countWordsObj[word] = 1;
    }
  }

  return countWordsObj
}
console.log('11n');
console.log(countWords(['apple', 'grape', 'apple', 'apple']));
