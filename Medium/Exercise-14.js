function personalIncomeTax(incomePersonInMonth) {
  let tax =0;
  let sum = 0;
  for(let i = 0; i < incomePersonInMonth.length; i++)
  {
    if (incomePersonInMonth[i] < 0 || incomePersonInMonth[i] % 1 !== 0)
      //If variable a is an integer or decimal
    {
      return 'Invalid input';
    }
    else if(incomePersonInMonth[i] > 50000000)
    {
      tax = incomePersonInMonth[i] * 20/100;
      sum += tax;
    }
    else if(incomePersonInMonth[i] > 20000000 && incomePersonInMonth[i] <50000000)
    {
      tax = incomePersonInMonth[i] * 10/100;
      sum += tax;
    }
    else if(incomePersonInMonth[i] < 20000000 )
    {
      tax = incomePersonInMonth[i] * 5/100;
      sum += tax;
    }
  }
  return sum;
}
function checkMediumExercise14() {
  console.assert(personalIncomeTax([60000000, 30000000, 10000000]) === 15500000,
    'Error when entering positive integer in MediumExercise-14');
  console.assert(personalIncomeTax([5000000, 0, 10000000]) === 750000,
    'Error when entering number 0 in MediumExercise-14');
  console.assert(personalIncomeTax([600000, -600000, 600000]) === 'Invalid input',
    'Error when entering negative integer in MediumExercise-14');
  console.assert(personalIncomeTax([600000, 's', 600000]) === 'Invalid input',
    'Error when entering character in MediumExercise-14');
}
checkMediumExercise14();

