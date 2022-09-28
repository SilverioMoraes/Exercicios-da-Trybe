const readline = require('readline-sync');

const calculatorBMI = (weight, height) => {
  console.log(`Peso: ${weight}, Altura: ${height}`);
  const heightMeters = height / 100;
  const heightSquared = heightMeters ** 2;
  const bmi = weight / heightSquared;
  return bmi;
};

const resultBMI = () => {
  const weight = readline.questionInt(`What’ your weight?`);
  const height = readline.questionInt(`What’ your height?`);
  const bmi = calculatorBMI(weight, height);
  console.log(`IMC: ${bmi.toFixed(2)}`);
};

resultBMI();
