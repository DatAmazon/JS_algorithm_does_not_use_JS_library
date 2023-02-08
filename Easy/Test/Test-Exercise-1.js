function runTest() {
  // let resultArray = changeLocation3Nums(5, 6, 7);
  // let expectedArray = [7, 5, 6];
  // console.assert(checkIfTwoArraysAreEqual(resultArray, expectedArray),
  //   'Error when entering integer in EasyExercise-1');
  // console.assert((changeLocation3Nums(4, 's', 3)) === 'Parameters passed in must be an integer',
  //   'Error when entering character in EasyExercise-1');
  console.assert(checkIfTwoArraysAreEqual(changeLocation3Nums(4.3, 4.34, 4.4), [4.4, 4.3, 4.34]) ,
    'Error when entering decimals in EasyExercise-1');
}

function checkIfTwoArraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// console.assert(checkIfTwoArraysAreEqual([-1, 0, 43], [-1, 0, 43]), 'Error1');
// console.assert(checkIfTwoArraysAreEqual([], []), 'Error2');
// console.assert(!checkIfTwoArraysAreEqual('dsa', []), 'Error3');
// console.assert(checkIfTwoArraysAreEqual([32, 45.423, 43], [32, 45.423, 43]), 'Error4');
// console.assert(!checkIfTwoArraysAreEqual([32, 43, 45.423, 43], [32, 45.423, 43]), 'Error5');
// console.assert(!checkIfTwoArraysAreEqual([32, 42, 45.423, 43], [32, 43, 45.423, 900]), 'Error6');


