function findNumberMinMoney(total){
  if(total % 1000 !== 0 || total < 0)//The input value must be a positive integer
  {
    return'The amount is a positive integer and multiple of 1000'
  }
  //formula for calculating units of money
  let m500 = 0, m200 = 0, m100 = 0, m50 = 0, m20 = 0, m10 = 0, m5 = 0, m2 = 0, m1 = 0;//m stands for money
  m500 = (total - (total % 500000))/ 500000
  total = total - (m500 * 500000)
  m200 = (total - (total % 200000))/ 200000
  total = total - (m200 * 200000)
  m100 = (total - (total % 100000))/ 100000
  total = total - (m100 * 100000)
  m50 = (total - (total % 50000))/ 50000
  total = total - (m50 * 50000)
  m20 = (total - (total % 20000))/ 20000
  total = total - (m20 * 20000)
  m10 = (total - (total % 10000))/ 10000
  total = total - (m10 * 10000)
  m5 = (total - (total % 5000))/ 5000
  total = total - (m5 * 5000)
  m2 = (total - (total % 2000))/ 2000
  total = total - (m2 * 2000)
  m1 = (total - (total % 1000))/ 1000
  total = total - (m5 * 1000)

  return ('The amount of 500000 is: ' + m500 + ' ; 200000 is: ' + m200 + ' ; 100000 is: ' + m100 + ' ; 50000 is: ' +m50
    + ' ; 20000 is: ' + m20+ ' ; 10000 is: ' + m10 + ' ; 5000 is: ' + m5 + ' ; 2000 is: ' + m2 + ' ; 1000 is: ' + m1);
}
function checkMediumExercise8() {
  console.assert(findNumberMinMoney(8797000) === 'The amount of 500000 is: 17 ; 200000 is: 1 ; 100000 is: 0 ' +
    '; 50000 is: 1 ; 20000 is: 2 ; 10000 is: 0 ; 5000 is: 1 ; 2000 is: 1 ; 1000 is: 0', 'Error when entering positive integer');
  console.assert(findNumberMinMoney(-1000000) === 'The amount is a positive integer and multiple of 1000',
    'Error when entering negative integer');
  console.assert(findNumberMinMoney('dd') === 'The amount is a positive integer and multiple of 1000',
    'Error when entering character');
  console.assert(findNumberMinMoney(0) === 'The amount of 500000 is: 0 ; 200000 is: 0 ; 100000 is: 0 ; 50000 is: 0 ; 20000 is: 0 ;' +
    ' 10000 is: 0 ; 5000 is: 0 ; 2000 is: 0 ; 1000 is: 0', 'Error when entering number 0');
  console.assert(findNumberMinMoney(2445453) === 'The amount is a positive integer and multiple of 1000',
    'Error when entering number not multiple of 1000');
}
checkMediumExercise8();