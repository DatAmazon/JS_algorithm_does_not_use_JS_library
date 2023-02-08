function concatTwoArrAndSortAscending(arr1, arr2) {
  for(let i = 0; i <= arr1.length; i++)// sort array arr1 ascending
  {
    if( arr1[i] > arr1[i +1])
    {
      return 'Array must be sorted ascending'
    }
  }
  for(let i = 0; i <= arr2.length; i++)// sort array arr2 ascending
  {
    if( arr2[i] > arr2[i +1])
    {
      return 'Array must be sorted ascending'
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
      newArr[i] = arr1[i]
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
      if (newArr[j] < newArr[i])
      {
        temp = newArr[j];
        newArr[j] = newArr[i];
        newArr[i] = temp;
      }
    }
  }
  return newArr;
}
function checkEasyExercise3() {
  console.assert(JSON.stringify(concatTwoArrAndSortAscending([0, 1.342, 2, 5, 7], [-3, -1, 2, 9.23, 34])) ===
    JSON.stringify([-3, -1, 0, 1.342, 2, 2, 5, 7, 9.23, 34]), 'Error when entering positive integer and decimals in HardExercise-3')
  console.assert(concatTwoArrAndSortAscending([0, 4, 0, 0], [1, 1, 1]) ===
    'Array must be sorted ascending', 'Error when entering array1 or array2 is not ascending order in HardExercise-3')
  console.assert(concatTwoArrAndSortAscending([0, 'sd', 0, 0], [1, 1, 1]) ===
    'Parameter passed in must be a decimals', 'Error when entering character in HardExercise-3')
}
checkEasyExercise3();