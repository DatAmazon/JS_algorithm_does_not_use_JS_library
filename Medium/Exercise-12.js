function getRandomnNegativeAToPositiveA(a)
{
  if ( a % 1 <= 1 || a % 1 >= -1 )//If the elements in the array are not numbers
  {
      return ((Math.random() * a ) - (Math.random() * a ));
    //from 0 to 1 multiple with parameter (a) result is from 0 to (a)
    //from 0 to (a) minus from 0 to (a), result is from negative a to positive a
  }
  else
  {
    return 'Parameter passed in must be a decimals';
  }
}
function checkMediumExercise12() {
  console.assert(getRandomnNegativeAToPositiveA(3) >= -3 && getRandomnNegativeAToPositiveA(3) <= 3, 'Error random out from -a to a, in MediumExercise-12');
  console.assert(getRandomnNegativeAToPositiveA('ds') === 'Parameter passed in must be a decimals',
    'Error when entering character in MediumExercise-12');
}
checkMediumExercise12();