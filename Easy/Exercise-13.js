function reverseArr(arr) {
  if (!isNumber(arr)) {
    return 'Parameter passed in must be a decimals';
  }
  for (let i = 0; i < arr.length / 2; i++)//Group 2 implements into 1 so i < arr.length / 2
  {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    //Group implement first and last, continue group implement first +1 and last -1, continues until i < arr.length / 2
  }
  return arr;
}

function isNumber(array) {// a must be enter number
  for (let j of array) {
    if (isNaN(j)) {
      return false;
    }
  }
  return true;
}

// function checkEasyExercise13() {
console.assert(JSON.stringify(reverseArr([2, 4, 5, 6])) == JSON.stringify([6, 5, 4, 2]),
  'Error when entering integer in EasyExercise-13');
console.assert(JSON.stringify(reverseArr([4, 5.4, 0, 34.233])) === JSON.stringify([34.233, 0, 5.4, 4]),
  'Error when entering decimals in EasyExercise-13');
console.assert(reverseArr([6, 'ds', 5.9, -2, 5]) === 'Parameter passed in must be a decimals',
  'Error when entering character in EasyExercise-13')
// }
// checkEasyExercise13();
