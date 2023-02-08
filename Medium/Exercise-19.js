function checkQuest() {
  let total = 0;
  for(let i = 1; i < 5; i++)
  {
    if(i %2 == 0)
    {
      total = total + 1;
    }
      else
    {
      total = total * 2;
    }
  }
  return total;
}
 checkQuest();