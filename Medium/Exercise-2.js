function concatArr(arrA, arrB) {
  for (let j of arrA)
  {
    if (isNaN(j)) {//If the elements in the array are not numbers
      return 'Parameter passed in must be a decimals';
    }
  }
  for (let j of arrB)
  {
    if (isNaN(j)) {//If the elements in the array are not numbers
      return 'Parameter passed in must be a decimals';
    }
  }
  let arrC = []
  for( let i = 0; i < (arrA.length + arrB.length); i++ )
  {
    if(i < arrA.length)
    {
      arrC[i] = arrA[i];
    }
    else
    {
      arrC[i] = arrB[i - arrA.length];
    }
  }
  return arrC;
}
function checkMediumExercise2() {
  console.assert(JSON.stringify(concatArr([2, 5, 9], [89, 35, 88])) ===
    JSON.stringify([2, 5, 9, 89, 35, 88]), 'Error when entering positive integer in MediumExercise-2');
  console.assert(JSON.stringify(concatArr([-2, 5, -9, -56, 0, -87], [35, 37])) ===
    JSON.stringify([-2, 5, -9, -56, 0, -87, 35, 37]), 'Error when entering negative integer and positive integer and number 0 in MediumExercise-2');
  console.assert(JSON.stringify(concatArr([2.434, 5.652], [0, 0, 3.432, 56, 23.453, 87.765])) ===
    JSON.stringify([2.434, 5.652, 0, 0, 3.432, 56, 23.453, 87.765]), 'Error when entering decimals in MediumExercise-2')
}
checkMediumExercise2();

