function cutStringByStartEndPosition(start, end) {
  let str = 'This is example for function cut string';
  let newStr = '';
  if( start % 1 !== 0 || start < 0 || end % 1 !== 0 || end < 0)
  {
    return 'start and end must be a positive integer';
  }
  if(start > end || start >= str.length || end >= str.length )
  {
    return 'start must be shorter than end; start, end must be shorter than str.length';
  }
  for(let i = start ; i <= end; i++)
  {
    newStr += str[i];
  }
  return newStr;
}
function checkMediumExercise17() {
  console.assert(cutStringByStartEndPosition(8, 13) === 'exampl', 'Error when input two positive in MediumExercise-17');
  console.assert(cutStringByStartEndPosition(-8, -13) === 'start and end must be a positive integer',
    'Error when input contain negative number in MediumExercise-17');
  console.assert(cutStringByStartEndPosition(343.3423, 'f') === 'start and end must be a positive integer',
    'Error when input is not integer positive in MediumExercise-17');
  console.assert(cutStringByStartEndPosition(432, 234) === 'start must be shorter than end; start, end must be shorter than str.length',
    'Error when input start or end longer than str.length in MediumExercise-17');
  console.assert(cutStringByStartEndPosition(432, 4) === 'start must be shorter than end; start, end must be shorter than str.length',
    'Error when input start or end longer than str.length in MediumExercise-17');
}
checkMediumExercise17();