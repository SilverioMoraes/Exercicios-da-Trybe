const custo = 30;
const venda = 90;

if (custo >= 0 && venda >= 0) {
  const custo_imposto = custo + 18;
  const lucro = (venda - custo_imposto) * 1000;
  console.log(lucro);
}
else {
  console.log("Error");
};