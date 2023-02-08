function randomRange(a,b)
{
  if ( (a % 1 <= 1 || a % 1 >= -1) && a < b  )
  {
    return a + (Math.random() * (b - a));
  }
  else
  {
    return 'Parameter passed in must be a decimals and a < b';
  }
}
function checkEasyExercise2() {
  console.assert(randomRange(5, 6) >= 5 && randomRange(5, 6) <= 6, 'Error when entering two positive integer in HardExercise-2');
  console.assert(randomRange(-3, -1) >= -3 && randomRange(-3, -1) <= -1,
    'Error when entering two negative integer in HardExercise-2');
  console.assert(randomRange(-1, 1) >= -1 && randomRange(-1, 1) <= 1,
    'Error when entering negative integer and positive integer in HardExercise-2');
  console.assert(randomRange(9, 6) === 'Parameter passed in must be a decimals and a < b', 'Error when entering a >b in HardExercise-2');
  console.assert(randomRange('ds', 6) === 'Parameter passed in must be a decimals and a < b',
    'Error when entering string in HardExercise-2');
  console.assert(randomRange(9, 6) >= 'Parameter passed in must be a decimals and a < b', 'Error when entering a >b in HardExercise-2');
}
checkEasyExercise2();