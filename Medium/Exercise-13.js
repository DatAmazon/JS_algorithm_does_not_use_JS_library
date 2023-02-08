function calculatePriceMotel(checkin, checkout) {
  let money = 0;
  if(checkin < 24 && checkout <=24 && checkin >= 0 && checkout >= 0 && checkin % 1 == 0 && checkout % 1 == 0)
  {
    if(checkout < checkin  && checkout > 8 && 24 - checkin >2 )
      //using the room overnight and pay > 8:00.am and set room > 22:00 pm
    {
      return money = 140000 + (22 - checkin) * 50000 + 160000 + (checkout - 8) * 40000;
    }
    if(checkout < checkin  && checkout <= 8 && checkin <24 && 24 - checkin <=2 )
      //using the room overnight and pay <= 8:00.am and set room <= 22:00 pm
    {
      return money = 160000 + (24 - checkin) * 70000;
    }
    else if(checkout < checkin  && checkout <= 8 && checkin <24 && 24 - checkin >=2 )
      //using the room overnight and pay <= 8:00.am and set room >= 22:00 pm
    {
      return money = 160000 + 140000 + (24 - checkin -2 ) * 50000;
    }
    else if(checkout < checkin  && checkout > 8 )//using the room overnight and pay after 8:00.am
    {
      return money = 160000 + (checkout - 8) * 40000;
    }
    else if(checkout - checkin <= 2)//using the room less than 2 hours
    {
      return money = (checkout - checkin) * 70000;
    }
    if((checkout - checkin) > 2 )//using the room greater than 2 hours
    {
      return money = 140000 + (checkout - checkin -2) * 50000;
    }
  }
  else
  {
    return 'Parameter passed in must be a positive integer, checkin < 24 and checkout <= 24';
  }
}
function checkMediumExercise13() {
  console.assert(calculatePriceMotel(1, 3) === 140000,
    'Error when checkin < checkout and number of hours of use <= 2 in MediumExercise-13');
  console.assert(calculatePriceMotel(1, 6) === 290000,
    'Error when checkin < checkout and number of hours of use > 2 in MediumExercise-13');
  console.assert(calculatePriceMotel(22, 8) === 300000, 'Error when used overnight in MediumExercise-13');
  console.assert(calculatePriceMotel(20, 10) === 480000, 'Error when used overnight and checkout > 8 in MediumExercise-13');
  console.assert(calculatePriceMotel(2.43, 10) === 'Parameter passed in must be a positive integer, checkin < 24 and checkout <= 24',
    'Error when entering decimals in MediumExercise-13');
  console.assert(calculatePriceMotel('sd', 10) === 'Parameter passed in must be a positive integer, checkin < 24 and checkout <= 24',
    'Error when entering character in MediumExercise-13');
  console.assert(calculatePriceMotel(-4, 10) === 'Parameter passed in must be a positive integer, checkin < 24 and checkout <= 24',
    'Error when entering negative number in MediumExercise-13');
  console.assert(calculatePriceMotel(24, 10) === 'Parameter passed in must be a positive integer, checkin < 24 and checkout <= 24',
    'Error when entering checkin >= 24 in MediumExercise-13');
  console.assert(calculatePriceMotel(2, 25) === 'Parameter passed in must be a positive integer, checkin < 24 and checkout <= 24',
    'Error when entering checkout > 24 in MediumExercise-13');
}
checkMediumExercise13();
