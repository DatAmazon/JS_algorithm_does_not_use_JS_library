function concatArrSortDescending (arr1, arr2) {
  for(let i = 0; i <= arr1.length; i++)// sort array arr1 descending
  {
    if( arr1[i] < arr1[i +1])
    {
      return 'Array must be sorted descending';
    }
  }
  for(let i = 0; i <= arr2.length; i++)// sort array arr1 descending
  {
    if( arr2[i] < arr2[i +1])
    {
      return 'Array must be sorted descending';
    }
  }
  for (let j of arr1)// implement in array arr1 must be an integer number or decimals
  {
    if (isNaN(j)) {
      return 'Parameter passed in must be a decimals';
    }
  }
  for (let j of arr2)// implement in array arr2 must be an integer number or decimals
  {
    if (isNaN(j)) {
      return 'Parameter passed in must be a decimals';
    }
  }
  let newArr = [];
  for( let i = 0; i <= (arr1.length + arr2.length - 1 ); i++ )// concat two array
  {
    if(i<arr1.length)
    {
      newArr[i] = arr1[i];
    }
    else
    {
      newArr[i] = arr2[i-arr1.length];
    }
  }
  let temp = 0;
  for (let i = 0; i < newArr.length; i++)// concat two array
  {
    for (let j = i; j < newArr.length; j++)
    {
      if (newArr[j] > newArr[i])
      {
        temp = newArr[j];
        newArr[j] = newArr[i];
        newArr[i] = temp;
      }
    }
  }
  return newArr;
}

function checkMediumExercise4() {
  console.assert(JSON.stringify(concatArrSortDescending([35, 23, 8.34, 7.3, 0, -2.4, -5], [35, 34.5, -2, -5.6])) ===
    JSON.stringify([35, 35, 34.5, 23, 8.34, 7.3, 0, -2, -2.4, -5, -5.6]), 'Error when entering decimals and integer in HardExercise-4');
  console.assert((concatArrSortDescending([34, 'sd', 4.5], [45, 35]) === 'Parameter passed in must be a decimals'),
    'Error when entering character in HardExercise-4');
  console.assert(concatArrSortDescending([88, 99, 23, 0], [88, 34, 32]) === 'Array must be sorted descending',
    'Error when entering array1 or array2 is not descending order in HardExercise-4');
}
checkMediumExercise4();