function divideTwoArr(arr1, arr2) {
  for (let j of arr1)
  {
    if (isNaN(j)) {//If the elements in the array are not numbers
      return 'Parameter passed in must be a decimals';
    }
  }
  for (let j of arr2)
  {
    if (isNaN(j) || (j) === 0 ) {//If the elements in the array are not numbers
      return 'Parameter passed in must be a decimals and difference number 0';
    }
  }
  // ((arr2[j] % 1 < 1 || arr2[j] % 1 > -1)
  let arrNew = []
  for (let i = 0; i < Math.max(arr1.length, arr2.length) ; i++)
  {
    arrNew[i] = (arr1[i] ||0) / (arr2[i] || 0)
  }
  return arrNew;
}
function checkMediumExercise6() {
  console.assert(JSON.stringify(divideTwoArr([-10, '-15', 20, 0, 8], [2, 3, -2, 5, 4])) ===
    JSON.stringify([-5, -5, -10, 0, 2]), 'Error when entering integer in MediumExercise-6');
  console.assert(JSON.stringify(divideTwoArr([5, -15.5, 20, 30, 5], [2.5, 10, -2.5, 1.5, 0.4])) ===
    JSON.stringify([2, -1.55, -8, 20, 12.5]), 'Error when entering decimals in MediumExercise-6');
  console.assert(JSON.stringify(divideTwoArr([5, -15], [2, 'sd', 16])) === 'Parameter passed in must be a decimals and difference number 0'
    , 'Error when entering character in MediumExercise-6')
}
checkMediumExercise6();

