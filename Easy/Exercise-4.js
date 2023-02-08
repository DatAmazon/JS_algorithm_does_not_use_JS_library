function countEvenNumber(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (!checkInteger(a[i])) {
      return 'Parameter passed in must be an integer';
    }
    if (checkEven(a[i])) {
      count = count + 1;
    }
  }
  return count;
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

console.log(countEvenNumber([40, 41, 42, 5, 0]))

function checkEasyExercise4() {
  console.assert(countEvenNumber([8, 53, 71, 64, 67, 45]) === 2, "Error when entering integer EasyExercise-4");
  console.assert(countEvenNumber([8, 10, 12, 'fs']) === 'Parameter passed in must be an integer',
    "Error when entering character EasyExercise-4");
  console.assert(countEvenNumber([8, 10, 12, 534.538]) === 'Parameter passed in must be an integer',
    "Error when entering decimals EasyExercise-4");
  console.assert(countEvenNumber([0, 0, -54, 67, -4, 168]) === 5,
    "Error when entering number 0 and negative number EasyExercise-4");
}

