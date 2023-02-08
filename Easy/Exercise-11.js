function findSmallest(a) {
  let min = a[0];
  for (let i = 0; i < a.length; i++) {
    if (!checkDecimal(a[i]))
    {
      return 'Parameter passed in must be an integer or decimal';
    }
    if (a[i] < min) {
      min = a[i];
    }
  }
  return min;
}

function checkDecimal(a) {
  if (a % 1 > -1 && a % 1 < 1) {
    return true;
  } else {
    return false;
  }
}
// console.log(findSmallest([2, 5, 6, -43, -3 -4, 32, 76]))
// function checkEasyExercise11() {
  console.assert(findSmallest([2, 5, 6, 79, 34, 32, 76]) === 2, 'Error when entering positive integer in EasyExercise-11');
  console.assert(findSmallest([-2, -5, -6, -79, -288, -32, -76]) === -288,
    'Error when entering negative integer in EasyExercise-11');
  console.assert(findSmallest([-2, -5, 0, -99, 34, 32, 76]) === -99,
    'Error when entering positive integer and  negative integer and number 0 in EasyExercise-11');
  console.assert(findSmallest([-2.43, 5.54, 76]) === -2.43, 'Error when entering decimals in EasyExercise-11');
  console.assert(findSmallest([-2, 'sd', 32, 76]) === 'Parameter passed in must be an integer or decimal',
    'Error when entering character in EasyExercise-11');
// }
//
// checkEasyExercise11();



