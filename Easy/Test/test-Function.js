//check integer
function checkInteger(number) {
  if (number % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
//check positive integer
function checkInteger(number) {
  if (number % 1 === 0 && number >= 0) {
    return true;
  }else {
    return false
  }
}
//check positive decimal
function checkDecimal(a) {
  if (a % 1 > -1 && a % 1 < 1) {
    return true;
  } else {
    return false;
  }
}
//check if two arrays are equal
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
// implement in array is NAN
function isNumber(array) {
  for (let j of array) {
    if (isNaN(j)) {
      return false;
    }
  }
  return true;
}
// console.log(isNumber([6, 'fgd', 5.9, -2, 5]))

//check positive string
function isString(a) {//
  if (a === 'string') {
    return true ;
  }
  else {
    return false;
  }
}
//caculation factorial
function caculationFactorial(number) {
  if (number < 0) {
    return -1;
  }
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}






