const weightKG = 120;
const heightCM = 189;

const calculatorBMI = (weight, height) => {
  console.log(`Peso: ${weight}, Altura: ${height}`);
  const heightMeters = height / 100;
  const heightSquared = heightMeters ** 2;
  const bmi = weight / heightSquared;
  return bmi;
};

const resultBMI = () => {
  const bmi = calculatorBMI(weightKG, heightCM);
  console.log(`IMC: ${bmi.toFixed(2)}`);
};

resultBMI();
