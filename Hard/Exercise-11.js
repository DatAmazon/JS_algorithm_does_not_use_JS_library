function returnsLastNumberFactorial(n) {
  //factorial calculation
  if (n === 0)
  {
    return 1;
  }
  if ( n % 1 == 0 && n >= 0)
  {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    // find last number in factorial
    result = result.toString();
    for (let i = result.length - 1; i >= 0; i--) {
      if (result[i] !== '0') {
        result = result[i];
        break;
      }
    }
    return parseInt(result);
  }
  else
  {
    return 'Parameter passed in must be an positive integer';
  }
}
function checkMediumExercise11() {
  console.assert(returnsLastNumberFactorial(20) === 4, 'Error when entering positive integer');
  console.assert(returnsLastNumberFactorial(-6) === 'Parameter passed in must be an positive integer',
    'Parameter passed in must be an negative integer');
  console.assert(returnsLastNumberFactorial('ew') === 'Parameter passed in must be an positive integer',
    'Parameter passed in must be a string');
  console.assert(returnsLastNumberFactorial(0) === 1, 'Error when entering number 0');
}
checkMediumExercise11();