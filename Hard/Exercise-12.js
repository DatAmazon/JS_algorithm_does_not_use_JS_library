function countAppear0InFactorial(n) {
  //factorial calculation
  if ( n % 1 == 0 && n >= 0) {
    let result = 1;
    let count = 0;
    for (let i = 1; i <= n; i++) {
      result *= i
    }
    //count times appear number 0
    result = result.toString()
    for (let i = result.length - 1; i >= 0; i--) {
      if (result[i] === '0') {
        count++
      }
    }
    return count;
  }
  else
  {
    return 'Parameter passed in must be an positive integer';
  }
}
function checkMediumExercise12() {
  console.assert(countAppear0InFactorial(0) === 0, 'Error when entering number 0');
  console.assert(countAppear0InFactorial(10) === 2, 'Error when entering positive integer');
  console.assert(countAppear0InFactorial(-20) === 'Parameter passed in must be an positive integer',
    'Error when entering negative integer');
  console.assert(countAppear0InFactorial('ds') === 'Parameter passed in must be an positive integer',
    'Error when entering character');
  console.assert(countAppear0InFactorial([4.5, 6]) === 'Parameter passed in must be an positive integer',
    'Error when entering array');
}
checkMediumExercise12();

