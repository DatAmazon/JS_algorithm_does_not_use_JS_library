function countElementsANotInB(arr1, arr2) {
  for (let j of arr1)
  {
    if (isNaN(j)) {//If the elements in the array are not numbers
      return 'Parameter passed in must be a decimals';
    }
  }
  for (let j of arr2)
  {
    if (isNaN(j)) {
      return 'Parameter passed in must be a decimals';
    }
  }
  let count = 0;
  for (let i = 0; i < arr1.length ; i++)
  {
    let isExist = false;
    for(let j =0 ; j < arr2.length ; j++)
    {
      if(arr1[i] === arr2[j])
      {
        isExist = true;// If exists an element in array arr1  equal to an element in array arr2 b, then break
        break;
      }
    }
    if (isExist === false)
    {
      count ++;// If not exists an element in array arr1  equal to an element in array arr2 b, then count
    }
  }
  return count;
}
function checkMediumExercise10() {
  console.assert(countElementsANotInB([5, -13, 8, 0, 45.45, 17, 4], [5, -13, 8, 9]) === 4,
    'Error when entering integer and in MediumExercise-10');
  console.assert(countElementsANotInB([5, 'sa', 54, 35], [5, 13, 8]) === 'Parameter passed in must be a decimals',
    'Error when entering character in MediumExercise-10');
}
checkMediumExercise10();

