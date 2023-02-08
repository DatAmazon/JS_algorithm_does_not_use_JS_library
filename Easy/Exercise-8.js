function checkPrimest(a) {
  return checkPrime(a)
}

function checkInteger(number) {
  if (number % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
function checkPrime(number) {
  let flat = 0;
  if (!checkInteger(number) || number <= 0 ) {
    flat = false;
  } else if (number > 1 && number <= 3) {
    flat = true;
  }
  else
  {
    for(let i = 2; i <= Math.sqrt(number); i++)
    {
      if(number % i === 0)
      {
        flat = false;
      }
      else
      {
        flat = true;
      }
    }
  }
  return flat;
}

console.log(checkPrime('sd'));
console.assert(checkPrimest(-101) === false, 'Error when entering integer negative in EasyExercise-8');
console.assert(checkPrimest(100) === false, 'Error when entering integer positive in EasyExercise-8');
console.assert(checkPrimest(97) === true, 'Error when entering integer positive in EasyExercise-8');
console.assert(checkPrimest(43.43) === false, 'Error when entering decimals in EasyExercise-8');
console.assert(checkPrimest('sas') === false, 'Error when entering string in EasyExercise-8');
console.assert(checkPrimest(0) === false, 'Error when entering number 0in EasyExercise-8');

// function checkPrime(number) {
//   let flat = 0;
//   if (number % 1 !== 0 || number <= 0 ) {
//     flat = false;
//   } else if (number > 1 && number <= 3) {
//     flat = true;
//   }
//   else
//   {
//     for(let i = 2; i <= Math.sqrt(number); i++)
//     {
//       if(number % i === 0)
//       {
//         flat = false;
//       }
//       else
//       {
//         flat = true;
//       }
//     }
//   }
//   return flat;
// }
