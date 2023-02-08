function  checkLogicExercise16() {
  return (((1<3) && (2<4) || (11<25 || 16> 21)) && true);
}
console.assert(checkLogicExercise16() == true , 'Result equals false ');
