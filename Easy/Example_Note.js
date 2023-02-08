// function checkPrime(number) {
//   let flat = 0;
//   if (number % 1 === 0) {
//     flat = false;
//   }
//   if (number % 1 !== 0 || number <= 1) {
//     flat = false;
//   } else if (number > 1 && number <= 3) {
//     flat = true;
//   } else {
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         flat = false;
//       } else {
//         flat = true;
//       }
//     }
//     return flat;
//   }
// }
//
// console.log(checkPrime('0'))

function checkInteger(number) {
  if (number % 1 !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(checkInteger('s'));

