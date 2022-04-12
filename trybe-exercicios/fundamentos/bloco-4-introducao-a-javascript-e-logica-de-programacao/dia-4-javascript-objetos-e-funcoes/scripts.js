let numbers =[2, 3, 6, 7, 10, 1];
function indiceDoMaior(numbers) {
    let indiceMaior = 0;
    for (let index in numbers) {
      if (numbers[indiceMaior] < numbers[index]) {
        indiceMaior = index;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior(numbers));