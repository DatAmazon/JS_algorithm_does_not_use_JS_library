function Fibonacci(n) {
  if(n % 1 !== 0 || n < 0)
  {
    return 'Parameter passed in must be a positive integer';
  }
  let fib = [n];
  fib[0] = 1;
  fib[1] = 1;
  if( n == 0 )
  {
    return [1];
  }
  else if( n == 1 )
  {
    return [1, 1];
  }
  for (let i = 2; i < n; i++)
  {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}
function checkMediumExercise16() {
  console.assert(JSON.stringify(Fibonacci(7)) === JSON.stringify([1, 1, 2, 3, 5, 8, 13]),
    'Error when entering negative integer in MediumExercise-16');
  console.assert(JSON.stringify(Fibonacci(0)) === JSON.stringify([1]), 'Error when entering number 0 in MediumExercise-16');
  console.assert(JSON.stringify(Fibonacci(1)) === JSON.stringify([1, 1]), 'Error when entering number 0 in MediumExercise-16');
  console.assert(Fibonacci(-5) === 'Parameter passed in must be a positive integer',
    'Error when entering negative integer in MediumExercise-16');
  console.assert(Fibonacci('ds') === 'Parameter passed in must be a positive integer',
    'Error when entering string in MediumExercise-16');
}
checkMediumExercise16();
