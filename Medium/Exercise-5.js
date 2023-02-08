function multiplyTwoArr(arr1, arr2) {
  for (let j of arr1)
  {
    if (isNaN(j)) {//If the elements in the array are not numbers
      return 'Parameter passed in must be a decimals';
    }
  }
  for (let j of arr2)
  {
    if (isNaN(j)) {//If the elements in the array are not numbers
      return 'Parameter passed in must be a decimals';
    }
  }
  let arrNew = []
  for (let i = 0; i < Math.max(arr1.length, arr2.length) ; i++)
  {
    arrNew[i] = (arr1[i] ||0) * (arr2[i] || 0)
    if (arrNew[i] ===  -0)
    {
      arrNew[i] = 0;
    }
  }
  return  arrNew;
}
function checkMediumExercise5() {
  console.assert(JSON.stringify(multiplyTwoArr([-5, 10, 4, 3, 0, 1], [5, -10, 15, 2, 30, -7])) === JSON.stringify([-25, -100, 60, 6, 0, -7]),
    'Error when entering integer in MediumExercise-5')
  console.assert(JSON.stringify(multiplyTwoArr([2.5, 3.7, 4.2, 6], [2.5, 10, 5])) === JSON.stringify([6.25, 37, 21, 0])
    , 'Error when entering decimals and difference lengths in MediumExercise-5')
  console.assert(multiplyTwoArr([3, 'ds', 5], [5, 10, -5, 4, 1]) === 'Parameter passed in must be a decimals',
    'Error when entering character in MediumExercise-5')
}
checkMediumExercise5();



