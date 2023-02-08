// function sumAB(a, b) {
//   if (checkInteger(a) && checkInteger(b)) {
//     return a + b;
//   } else {
//     return 'Parameter input must in an integer';
//   }
// }

// console.log(sumAB('dsa', 9));
// function () {
// }
function checkInteger(number) {
  if (number % 1 !== 0) {
    return false;
  } else {
    return true;
  }
}
console.log(checkInteger('sda'));