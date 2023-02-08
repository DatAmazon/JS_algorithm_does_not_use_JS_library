
function checkInteger(a) {
  for (let j = i; j < a.length; j++)
  {
    if(a[i] % 1 <= 1 || a[i] % 1 >= -1)
    {
    }
    else
    {
      return 'Parameter passed in must be a decimals';
    }
  }
}
function checkIntegers(a) {
  for (let j of a)
  {
    if (isNaN(j)) {
      return 'Parameter passed in must be a decimals';
    }
  }
}