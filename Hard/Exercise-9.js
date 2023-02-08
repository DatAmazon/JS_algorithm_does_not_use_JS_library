function sumStringAInStringB(strA, strB) {
  if (typeof strA !== 'string' || typeof strB !== 'string')//The input value must be a string
  {
    return 'Parameter passed in must be a string';
  }
  let flag;
  let numberTimesAAppearsInB = 0;
  let lenStrA = strA.length;
  let lenStrB = strB.length;
  for(let i = 0; i <= lenStrA - lenStrB ; ++i)
  {
    if(strA[i] === strB[0])
    {
      flag = 1;
      for(let j = 1; j < lenStrB; ++j)
      {
        if(strA[i + j] !== lenStrB[j])
        {
          flag = 0;
        }
      }
      ++numberTimesAAppearsInB;
    }
  }
  if(numberTimesAAppearsInB === 0)
  {
    return ('strB not exists in strA');
  }
  else
  {
    return numberTimesAAppearsInB;
  }

}
function checkMediumExercise9() {
  console.assert(sumStringAInStringB('la la ka la la ka la', 'la') === 5, 'Error when entering strB exists in strA');
  console.assert(sumStringAInStringB('la la ka la la ka la', 'na') === 'strB not exists in strA',
    'Error when entering strB not exists in strA');
  console.assert(sumStringAInStringB([4, 55, 6], 'na') === 'Parameter passed in must be a string',
    'Error, Not entering array in strB or strA');
  console.assert(sumStringAInStringB(89, 'na') === 'Parameter passed in must be a string',
    'Error, Not entering number in strB or strA');
}
checkMediumExercise9();