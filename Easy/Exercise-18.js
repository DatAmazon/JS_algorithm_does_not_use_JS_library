function  checkLogicExercise18() {
  return ((true && false) || (false && false)) && (false || true);
}
console.assert(checkLogicExercise18() == false , 'Error');
