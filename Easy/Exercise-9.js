function getRemainder(a, b) {
  let result = 0;
  if (!checkInteger(a)) {
    return 'Parameter passed in must be an integer';
  }
  if (!checkInteger(b) || b === 0) {
    return 'Parameter passed in must be an integer and non-zero';
  }
  else if(a >= 0 && b >0)// If both variable a and variable c are positive
  {
    while (a >= b) {
      a = a - b;
    }
    result = a;
  }
  else if(a >= 0 && b < 0)// If a is positive and variable b is negative
  {
    b = b * -1;
    while (a >= b) {
      a = a - b;
    }
    result = a;
  }
  else if(a <= 0 && b >0)// If a is negative and variable b is positive
  {
    a = a * -1;
    while (a >= b) {
      a = a - b;
    }
    result = a * -1;
  }
  else if(a <= 0 && b < 0)// If both a and c are negative
  {
    a = a * -1;
    b = b * -1;
    while (a >= b) {
      a = a - b;
    }
    result = a * - 1;
  }

  return result;
}
function checkInteger(number) {
  if (number % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
  console.assert(getRemainder(19, 17) === 2, 'Error when entering both a and b positive integer in EasyExercise-9');
  console.assert(getRemainder(-19, 7) === -5, 'Error when entering a as a negative integer and b as a positive integer in EasyExercise-9');
  console.assert(getRemainder(25, -9) === 7, 'Error when entering a as a positive integer and b as a negative integer in EasyExercise-9');
  console.assert(getRemainder(-40, -13) === -1, 'Error when entering both a and b negative integer in EasyExercise-9');
  console.assert(getRemainder('n', -13) === 'Parameter passed in must be an integer', 'Error when entering string in EasyExercise-9');
  console.assert(getRemainder(-40, 0) === 'Parameter passed in must be an integer and non-zero',
    'Error when entering b equals number 0 in EasyExercise-9');
  console.assert(getRemainder(0, -13) === 0, 'Error when entering a equals number 0 in EasyExercise-9');
  console.assert(getRemainder(453.43, -13) === 'Parameter passed in must be an integer',
    'Error when entering decimals in EasyExercise-9');
