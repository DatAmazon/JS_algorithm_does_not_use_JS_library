function  checkLogicExercise19() {
  return ((true || false) && (true || false)) || (true && false);
}
console.assert(checkLogicExercise19() == true , 'Error');
