let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i ++) {
    for (let index = 0; index < i; index ++) {
      if (numbers[i] < numbers[index]) {
        let ordem = numbers[i];
        numbers[i] = numbers[index];
        numbers[index] = ordem;
      }
    }
  }
  console.log(numbers)