function sumTwoArr(arr1, arr2) {
  for (let j of arr1)
  {
    if (isNaN(j)) //If the elements in the array are not numbers
    {
      return 'Parameter passed in must be a decimals';
    }
  }
  for (let j of arr2)
  {
    if (isNaN(j)) //If the elements in the array are not numbers
    {
      return 'Parameter passed in must be a decimals';
    }
  }
  let arrNew = []
  for (let i = 0; i < Math.max(arr1.length, arr2.length) ; i++)
  {
    arrNew[i] = (arr1[i] ||0) + (arr2[i] || 0);
  }
  return arrNew;
}
function checkMediumExercise3() {
  console.assert(JSON.stringify(sumTwoArr([-5, 10, 0, -15, 20, -30], [8, 16, 8, 13, 80, 60])) ===
    JSON.stringify([3, 26, 8, -2, 100, 30]), 'Error when entering integer in MediumExercise-3');
  console.assert(JSON.stringify(sumTwoArr([-5.5, 30.5, 8.5], [8.5, 16.5, 13.5, 80.6, 60.5])) === JSON.stringify([3, 47, 22, 80.6, 60.5]),
    'Error when entering decimals and arrays of different lengths in MediumExercise-3');
  console.assert(sumTwoArr([-7, 'sd', 5, 17], [-4, 16, 23]) === 'Parameter passed in must be a decimals',
    'Error when entering character in MediumExercise-3');
}
checkMediumExercise3();
