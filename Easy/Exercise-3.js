function checkParity(a, b) {
  if( !checkInteger(a) || !checkInteger(b))
  {
    return 'Parameter passed in must be an integer';
  }
  let c = a + b;
  if( c % 2 === 0)// The sum of two numbers that are both even or odd is always an even number
  {
    if(a % 2 === 0)// If a number is divided by 2 the remainder 0, then both number is an even integer
      {
        return (a + ' and '+ b +' both even');
      }
      else// Else, if a number is divided by 2 the remainder 1, then both number is an odd integer
      {
        return (a + ' and '+ b +' both odd');
      }
  }
  else
  {
    return ('One even, One odd');// The sum of two numbers, one even and one odd, is always an odd number
  }
}
function checkInteger(number) {
  if (number % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
// function checkEasyExercise3() {
  console.assert(checkParity(6, 8) === '6 and 8 both even', 'Error when entering both a and b even numbers in EasyExercise-3');
  console.assert(checkParity(9, 7) === '9 and 7 both odd', 'Error when entering both a and b odd numbers in EasyExercise-3');
  console.assert(checkParity(6, 7) === 'One even, One odd', 'Error when entering one even, one odd in EasyExercise-3');
  console.assert(checkParity(0, 0) === '0 and 0 both even', 'Error when entering both a and b equals = 0 in EasyExercise-3');
  console.assert(checkParity(34.3423, 0) === 'Parameter passed in must be an integer',
    'Error when entering decimal in EasyExercise-3');
  console.assert(checkParity('sd', 8) === 'Parameter passed in must be an integer',
    'Error when entering character in EasyExercise-3');
// }
// checkEasyExercise3();