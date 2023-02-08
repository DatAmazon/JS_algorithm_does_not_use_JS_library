function sumDigits(n) {
  if(n % 1 !== 0)//If variable n is not an integer
  {
    return 'Parameter passed in must be an integer';
  }
  let sum = 0;
  while (n) {
    let digit = n % 10;//Take last number of number n
    sum += digit; //Add with sum
    n = (n - digit) / 10;//remove the number of just get
  }
  if (sum < 0)
  {
    sum = sum * -1
  }
  return sum;
}
function checkMediumExercise15() {
  console.assert(sumDigits(-555556) === 31, 'Error when entering negative integer in MediumExercise-15');
  console.assert(sumDigits(555556) === 31, 'Error when entering positive integer in MediumExercise-15');
  console.assert(sumDigits(0) === 0, 'Error when entering number 0 in MediumExercise-15');
  console.assert(sumDigits(32432.23423) === 'Parameter passed in must be an integer', 'Error when entering decimals in MediumExercise-15');
  console.assert(sumDigits('ds') === 'Parameter passed in must be an integer', 'Error when entering character in MediumExercise-15');
}
checkMediumExercise15();