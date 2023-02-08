function sortArrayAscending(array) {//sort an array of numbers in ascending
  let select = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++)
    {
      if(array[i] % 1 <= 1 || array[i] % 1 >= -1)//If variable a is an integer or decimal
      {
        if (array[j] < array[i]) {
          select = array[j];
          array[j] = array[i];
          array[i] = select;
        }
      }
      else
      {
        return 'Parameter passed in must be a decimals';
      }
    }
  }
  return (array);
}
function checkMediumExercise1() {
  console.assert(JSON.stringify(sortArrayAscending([3, 1, 2, 8, 7, 12, 6])) === JSON.stringify([1, 2, 3, 6, 7, 8, 12]),
    'Error when entering positive integer in MediumExercise-1');
  console.assert(JSON.stringify(sortArrayAscending([-3, -1, -2, 0, -7, -12, -69876])) === JSON.stringify([-69876, -12, -7, -3, -2, -1, 0]),
    'Error when entering negative integer and positive integer and number 0 in MediumExercise-1');
  console.assert((sortArrayAscending([7, 'ds', 12, 6])) === 'Parameter passed in must be a decimals',
    'Error when entering character in MediumExercise-1');
  console.assert(JSON.stringify(sortArrayAscending([67, 0, -34, 12, 64, 4.432, 6.43, 100])) ===
    JSON.stringify([-34, 0, 4.432, 6.43, 12, 64, 67, 100]), 'Error when entering decimals in MediumExercise-1');
}
checkMediumExercise1();