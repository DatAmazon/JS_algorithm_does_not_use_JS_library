function getRandom0ToA(a)
{
  if ( a % 1 <= 1 || a % 1 >= -1 )
  {
    return ((Math.random() * a ));//from 0 to 1 multiple with parameter (a) result is from 0 to (a)
  }
  else
  {
      return 'Parameter passed in must be a decimals';
  }
}
function checkMediumExercise11() {
  console.assert(getRandom0ToA(6) <= 6 && getRandom0ToA(6) >= 0, 'Error random out from 0 to a, in MediumExercise-11');
  console.assert(getRandom0ToA('ds') === 'Parameter passed in must be a decimals', 'Error when entering character in MediumExercise-11');
}
checkMediumExercise11();