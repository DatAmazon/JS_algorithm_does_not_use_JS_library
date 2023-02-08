function calculationFormula( number) { //formula for calculating units of money
  let hundred = 0
  let dozel = 0
  let unit = 0
  hundred = (number - number % 100) / 100;
  number = number - (hundred * 100);
  dozel = (number - number % 10) / 10;
  number = number - (dozel * 10);
  unit = number;
  return changeNumtoText(hundred) + ' trăm ' + changeNumtoText(dozel) + ' mươi '+ changeNumtoText(unit)
}
function changeNumtoText(num) {// change money from number to text
  switch(num){
    case 0: return 'không';
      break
    case 1:return('Một')
      break
    case 2:return('hai')
      break
    case 3:return('ba')
      break
    case 4:return('bốn')
      break
    case 5:return('năm')
      break
    case 6:return('sáu')
      break
    case 7:return('bảy')
      break
    case 8:return('tám')
      break
    case 9:return('chín')
      break
  }
}
function changeMoneyFromNumberToText(moneyArr) {
  // number = 123 235 456 678
  let res = '';
  for(let i = moneyArr.length -1 ; i >= 0; i--)
  {
    switch(i)
    {
      case 2: res = ' nghìn ' + res;
        break;
      case 1: res = ' triệu ' + res;
        break;
      case 0: res = ' tỉ ' + res;
    }
    res = calculationFormula(moneyArr[i]) + ' ' +  res;
  }
  return res;
}

function checkMediumExercise7() {
  console.assert(changeMoneyFromNumberToText([123, 234, 456, 567]) === 'Một trăm hai mươi ba  tỉ hai trăm ba' +
    ' mươi bốn  triệu bốn trăm năm mươi sáu  nghìn năm trăm sáu mươi bảy ', 'Error when enter money is positive integer')
  console.assert(changeMoneyFromNumberToText([393, 204, 406, 567]) === 'ba trăm chín mươi ba  tỉ hai trăm không' +
    ' mươi bốn  triệu bốn trăm không mươi sáu  nghìn năm trăm sáu mươi bảy ', 'Error when entering amount with tens equals 0')
}
checkMediumExercise7();
