function powAB(a, b) {
  if( !checkInteger(a) || !checkInteger(b))
  {
    return 'Parameter passed in must be an integer';
  }
  let c = 1;
  for(let i = 1; i <= b; i++ )
  {
    c *= a;// b time a * a
  }
  return c;
}

//check integer
function checkInteger(number) {
  if (number % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
// function checkEasyExercise2() {
  console.assert(powAB(4, 6) === 4096, 'Error when entering integer in EasyExercise-2');
  console.assert(powAB('ee', 5) === 'Parameter passed in must be an integer', 'Error when entering character in EasyExercise-2');
  console.assert(powAB(7.54, 5) === 'Parameter passed in must be an integer', 'Error when entering character in EasyExercise-2');
  console.assert(powAB(0, 5) === 0, 'Error when entering a = 0 in EasyExercise-2');
  console.assert(powAB(4, 0) === 1, 'Error when entering both b= 0 in EasyExercise-2');
  console.assert(powAB(0, 0) === 1, 'Error when entering both a and b equals 0 in EasyExercise-2');
// }
// checkEasyExercise2();
