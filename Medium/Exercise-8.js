function LocationFirstStringAInStringB(strA, strB) {
  if (typeof strA !== 'string' || typeof strB !== 'string')//if strA or strB not a string data type
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
      for(let j = 0; j < lenStrB; ++j)
      {
        if(strA[i + j] !== lenStrB[j])
        {
          ++numberTimesAAppearsInB;
          return  (i + j);
        }
      }

    }
  }
  if(numberTimesAAppearsInB === 0)
  {
    return ('strB not exists in strA');
  }
}
function checkMediumExercise8() {
  console.assert(LocationFirstStringAInStringB('I go work today today I  work today', 'today') === 10,
    'Error when entering character in MediumExercise-8');
  console.assert(LocationFirstStringAInStringB('vodka--- a 453  l?!a  la', 'l?') === 16,
    'Error when entering string, number and special character in MediumExercise-8');
}
checkMediumExercise8()
