function minusTwoArr(arr1, arr2) {
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
  for (let i = 0; i < (Math.max(arr1.length, arr2.length)) ; i++)
  {
    arrNew[i] = (arr1[i] ||0) - (arr2[i] || 0)
  }
  return  arrNew;
}
function checkMediumExercise4() {
  console.assert(JSON.stringify(minusTwoArr([5.5, -30.5, 0, -1, 8.5], [8.5, 16.5, -5, -13.5, 80.5, 60.5])) ===
    JSON.stringify([-3, -47, 5, 12.5, -72, -60.5]),'Error when entering negative integer and positive integer and number 0 in MediumExercise-4')
  console.assert(minusTwoArr([0, 0, 'sd', 10, 30], [5, 10, 15]) === 'Parameter passed in must be a decimals',
    'Error when entering character in MediumExercise-4')
}
checkMediumExercise4();