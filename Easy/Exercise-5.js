function countOddNumbers(a) {
  let counts = 0;
  for(let i = 0; i < a.length; i++)
  {
    if(!checkInteger(a[i])){
      return 'Parameter passed in must be an integer'
    }
    if(checkOdd(a[i])){
      counts++
    }
  }
   return counts;
}

function checkInteger(integer) {
  if (integer % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

function checkOdd(number) {
  if (number % 2 === 1  || number % 2 === -1) {
    return true;
  } else {
    return false;
  }
}
console.log(countOddNumbers([45, 41, 42, 5, -1]))




// function checkEasyExercise5() {
//   console.assert(countOddNumbers([10, 34, 67, 4, 53, 543]) === 3, "Error when entering integer positive in EasyExercise-5");
//   console.assert(countOddNumbers([-3, -43, -75, -41, -32, -45]) === 5, "Error when entering integer negative in EasyExercise-5");
//   console.assert(countOddNumbers([-3, -43, -75, -41, 0, 30, 42]) === 4,
//     "Error when entering integer negative and integer positive and number 0 in EasyExercise-5");
//   console.assert(countOddNumbers(['sa', -43, -75, -41, 0, 30, 42]) === 'Parameter passed in must be an integer',
//     "Error when entering character in EasyExercise-5");
//   console.assert(countOddNumbers([343.342, -93.645 - 75, -41, 0, 30, 42]) === 'Parameter passed in must be an integer',
//     "Error when entering decimals in EasyExercise-5");
// }
// checkEasyExercise5();