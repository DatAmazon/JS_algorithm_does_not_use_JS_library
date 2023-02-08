function shuffleOrderElementNumInArray(arrA) {
  for (let j of arrA)
  {
    if (isNaN(j)) {//implement in array arr1 must be an integers number or decimals
      return 'Parameter passed in must be a decimals';
    }
  }
  let newArr = []
  for(let i = 0; i < arrA.length; i++)
  {
    if(i < arrA.length - 1)
    {
      newArr[i +1] = arrA[i]
    }
    else if(i === arrA.length-1)
    {
      newArr[0] = arrA[arrA.length-1]
    }
  }
  return newArr;
}
function checkMediumExercise10() {
  console.assert(JSON.stringify(shuffleOrderElementNumInArray([3, -5.4, 0, 3.4, 77, -29])) === JSON.stringify([-29, 3, -5.4, 0, 3.4, 77])
    , 'Error when entering decimals and integer');
  console.assert(shuffleOrderElementNumInArray([3, 'sd', 3.4, 77, -29]) === 'Parameter passed in must be a decimals',
    'Error when entering implement is character');
  console.assert(shuffleOrderElementNumInArray([3, [3, 4], 3.4, 77, -29]) === 'Parameter passed in must be a decimals',
    'Error when entering implement is array');
}
checkMediumExercise10();