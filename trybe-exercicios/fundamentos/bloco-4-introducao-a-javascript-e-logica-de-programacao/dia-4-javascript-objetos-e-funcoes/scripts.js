let numbers =[2, 4, 6, 7, 10, 0, -3];
function indiceDoMenor(numbers) {
    let indiceMenor = 0;
    for (let index in numbers) {
      if (numbers[indiceMenor] > numbers[index]) {
        indiceMenor = index;
      }
    }
    return indiceMenor;
  }
  
  console.log(indiceDoMenor(numbers));