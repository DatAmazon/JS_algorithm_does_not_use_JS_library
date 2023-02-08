function reverseCharactersInStringButKeepPositionWords(str) {
  let newStr = '';
  for(let i = str.length - 1; i >= 0 ; i--)
  //reverse characters in string
  {
    newStr += str[i];
  }
  let strSplit = newStr.split(' ');// cut string by character ' '
  let strFinish = '';
  for ( let i = strSplit.length - 1 ; i >= 0; i--)//reverse characters in words in string
    if(i > 0)
      {
        strFinish += strSplit[i] + " ";
      }
    else
      {
        strFinish += strSplit[i];
      }
  return (strFinish);
}
function checkEasyExercise1() {
  console.assert(reverseCharactersInStringButKeepPositionWords('I am Doing JS') === 'I ma gnioD SJ', 'Error when entering string in HardExercise-1');
  console.assert(reverseCharactersInStringButKeepPositionWords('---     abc98    !') === '---     89cba    !',
    'Error when entering string and special character in HardExercise-1');
  console.assert(reverseCharactersInStringButKeepPositionWords('') === '', 'Error when string is null in HardExercise-1');
  console.assert(reverseCharactersInStringButKeepPositionWords('098. 324. -324') === '.890 .423 423-', 'Error when entering number in HardExercise-1');
}
checkEasyExercise1();

