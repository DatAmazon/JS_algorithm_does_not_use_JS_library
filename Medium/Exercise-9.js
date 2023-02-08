function countElementsInArr1AndInArr2(arr1, arr2) { //Quest10
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
  let count = 0;
  for (let i = 0; i < arr1.length ; i++){
    for (let j =0 ; j < arr2.length ; j++)
    {
      if(arr1[i] == arr2[j])// if element in array arr1 = element in array arr2 then count
      {
        count++;
        break;
      }
    }
  }
  return count;
}
function checkMediumExercise9() {
  console.assert((countElementsInArr1AndInArr2([5, 0, -3, 45], [5, 0, -3, 80, 90, 30, 8])) === 3,
    'Error when entering positive integer in MediumExercise-9');
  console.assert((countElementsInArr1AndInArr2([5, 'sd', 8], [5, 5, 80, 80])) === 'Parameter passed in must be a decimals',
    'Error when entering character in MediumExercise-9');
  console.assert((countElementsInArr1AndInArr2([5, 8.54, 90, 8.78], [7, 8.54, 10, 8.78])) === 2,
    'Error when entering decimals in MediumExercise-9');
}
checkMediumExercise9()
