function sumOddNumber(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (!checkInteger(a[i])) {
      return 'Parameter passed in must be an integer';
    }
    if (checkOdd(a[i])) {
      sum += a[i];
    }
  }
  return sum;
}

function checkInteger(number) {
  if (number % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

function checkOdd(number) {
  if (number % 2 === 1 || number % 2 === -1) {
    return true;
  } else {
    return false;
  }
}

console.log( sumOddNumber([5, 15, 42, -5, 8, 10, 8, 15, 1]))
// function checkEasyExercise7()
// {
//   console.assert(sumOddNumber([8, 2, 10, 4, 16, 3, 7, 1, 9, 5, 15]) === 40, 'Error when entering integer positive in EasyExercise-7');
//   console.assert(sumOddNumber([-8, -2, -10, -21, -3, -7]) === -31, 'Error when entering integer negative in EasyExercise-7');
//   console.assert(sumOddNumber([8, 2, 13, 3, 0, -21, -3, -7]) === -15,
//     'Error when entering integer negative and positive and number 0 in EasyExercise-7');
//   console.assert(sumOddNumber([-8, -2, -10, -21, -3, 'ds']) === 'Parameter passed in must be an integer',
//     'Error when entering character in EasyExercise-7');
//   console.assert(sumOddNumber([-8, -2, -10.632, -21, -3, 4.54]) === 'Parameter passed in must be an integer',
//     'Error when entering decimals in EasyExercise-7');
// }
// checkEasyExercise7();