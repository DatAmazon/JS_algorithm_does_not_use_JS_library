function changeLocation3Nums(a, b, c) {
  if (!checkDecimal(a) || !checkDecimal(b) || !checkDecimal(c)) {
    return ('Parameters passed in must be an integer');
  }

  let arr = [a, b, c];
  let d = c;// Create a intermediate variable d
  c = b;
  b = a;
  a = d;
  arr = [a, b, c];
  return arr;
}

function checkDecimal(a) {
  if (a % 1 > -1 && a % 1 < 1) {
    return true;
  } else {
    return false;
  }
}

console.log(changeLocation3Nums(5, 6, 7))
// function checkEasyExercise1() {
console.assert(JSON.stringify(changeLocation3Nums(5, 6, 7)) === JSON.stringify([7, 5, 6]),
  'Error when entering integer in EasyExercise-1');
console.assert((changeLocation3Nums(4, 's', 3)) === 'Parameters passed in must be an integer',
  'Error when entering character in EasyExercise-1');
console.assert(JSON.stringify(changeLocation3Nums(4.3, 4.34, 4.4)) === JSON.stringify([4.4, 4.3, 4.34]),
  'Error when entering decimals in EasyExercise-1');
// }
// checkEasyExercise1();
