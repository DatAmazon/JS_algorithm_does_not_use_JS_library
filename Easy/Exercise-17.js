function  checkLogicExercise17() {
  return (((5<6) || (4<2)) && (21<20 && 13 < 11) && false);
}
console.assert(checkLogicExercise17() == false , 'Error');
