function factorial(a) {
  if (!checkInteger(a))
  {
    return 'Parameter passed in must be a positive integer';
  }
  return  caculationFactorial(a);
}
function checkInteger(number) {
  if (number % 1 === 0 && number >= 0) {
    return true;
  }else {
    return false
  }
}

function caculationFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

  console.assert(factorial(5) === 120, 'Error when entering positive integer in EasyExercise-15');
  console.assert(factorial(-4) === 'Parameter passed in must be a positive integer',
    'Error when entering negative integer in EasyExercise-15');
  console.assert(factorial('ds') === 'Parameter passed in must be a positive integer',
    'Error when entering character in EasyExercise-15');
  console.assert(factorial(5.532) === 'Parameter passed in must be a positive integer',
    'Error when entering decimals in EasyExercise-15');
  console.assert(factorial(0) === 1,
    'Error when entering number 0 in EasyExercise-15');

