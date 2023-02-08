function  checkLogicExercise20() {
  return !(!(true || false) && (!true && false)) && (true && !false);
}

console.assert(checkLogicExercise20() == true , 'Error');
