function findLocationNumberAInArrB(a) {
  if (!checkDecimal(a))//If variable a is an integer or decimal
  {
    return 'Parameter passed in must be a decimals';
  }
  let arr = [1, 2, 3, 4, 5, 3, 5.343, 9, -7, -7, -7];
  let result = 0;
  for (let i = 0; i < arr.length; i++) //check from the beginning to the end of the array
  {
    if (arr[i] === a) {
      result = i;
      break;
    } else {
      result = -1;
    }
  }
  return result;
}

function checkDecimal(a) {
  if (a % 1 > -1 && a % 1 < 1) {
    return true;
  } else {
    return false;
  }
}

// function checkEasyExercise14()
// {
  console.assert(findLocationNumberAInArrB(3) === 2, 'Error when entering positive integer in EasyExercise-14');
  console.assert(findLocationNumberAInArrB(-7) === 8, 'Error when entering negative integer in EasyExercise-14');
  console.assert(findLocationNumberAInArrB('aaa') === 'Parameter passed in must be a decimals',
    'Error when entering character in EasyExercise-14');
  console.assert(findLocationNumberAInArrB(43) === -1, 'Error when entering number not in array in EasyExercise-14');
  console.assert(findLocationNumberAInArrB(5.343) === 6, 'Error when entering decimals in EasyExercise-14');
// }
// checkEasyExercise14();
//
