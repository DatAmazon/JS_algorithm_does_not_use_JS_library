function addEvenNumber(a) {
  let sum = 0;
  for(let i = 0; i < a.length; i++)
  {
    if( !checkInteger(a[i]))
    {
      return 'Parameter passed in must be an integer';
    }
    if(checkEven(a[i]))
    {
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

function checkEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(addEvenNumber([5, 15, 42, -5, 8, 10, 8, 15]))



// function checkEasyExercise6() {
//   console.assert(addEvenNumber([8, 2, 10, 4, 16, 67, 67, 45]) === 40, 'Error when entering integer positive in EasyExercise-6');
//   console.assert(addEvenNumber([-8, -2, 67, 45]) === -10, 'Error when entering integer negative in EasyExercise-6');
//   console.assert(addEvenNumber([4, 16, -6, -2, 5, 0]) === 12,
//     'Error when entering integer negative and integer positive and number 0 in EasyExercise-6');
//   console.assert(addEvenNumber([-8, -2, 67.43, 45]) === 'Parameter passed in must be an integer',
//     'Error when entering decimals in EasyExercise-6');
//   console.assert(addEvenNumber([-8, -2.54, 'd', 45]) === 'Parameter passed in must be an integer',
//     'Error when entering character in EasyExercise-6');
// }
// checkEasyExercise6();