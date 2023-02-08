function getElementArrayByLocation(arrA, start, end) {
  for (let j of arrA) {
    if (isNaN(j)) {//If the elements in the array are not numbers
      return 'Parameter passed in must be a decimals';
    }
  }
  if (start < arrA.length && end < arrA.length && start <= end)
  {
    let newArr = [];
    let index = 0;
    for (let i = start; i < end; i++) {
      newArr[index] = arrA[i];//Take the value of a and assign it to b
      index++;//Each time assign array newArr add one element
    }
    return newArr;
  }
  else
  {
    return 'start must be less than end; start and end less than arrA.length';
  }
}
function checkMediumExercise7() {
  console.assert(JSON.stringify(getElementArrayByLocation([3, 7, 32, 54, 86, 32, 54, 23], 3, 6)) ===
    JSON.stringify([54, 86, 32]))
  console.assert(getElementArrayByLocation([3, 7, 32, 54, 86, 32, 54, 23], 7, 6) ===
    'start must be less than end; start and end less than arrA.length', 'Error when entering start greater than end in MediumExercise-7');
  console.assert(getElementArrayByLocation([3, 7, 32, 54, 86, 32, 54, 23], 300, 6) ===
    'start must be less than end; start and end less than arrA.length', 'Error entering start or end greater than arrA.length in MediumExercise-7');
}
checkMediumExercise7()