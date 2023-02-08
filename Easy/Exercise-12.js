function averageArr(a) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (!checkDecimal(a[i])) {
      return 'Parameter passed in must be an integer or decimal';
    }
    sum += a[i];
    count++;
  }
  return (sum / count);
}

function checkDecimal(a) {
  if (a % 1 > -1 && a % 1 < 1) {
    return true;
  } else {
    return false;
  }
}

// function checkEasyExercise12() {
  console.assert(averageArr([-9, 6, 0, -11, 34, 32, 76.56, 600]) === 91.07,
    'Error when entering integer, decimals and 0 in EasyExercise-12');
  console.assert(averageArr(['sd', 32, 76, [4, 45]]) === 'Parameter passed in must be an integer or decimal',
    'Error when entering not number in EasyExercise-12');
// }
//
// checkEasyExercise12();
