// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const numeroSortiado = () => {
return Math.floor(Math.random() * (5 - 1)) + 1;
};
// console.log(numeroAleatorio(1, 5));

const resultadoSorteio = (meuNumero, callback) => {
    if(meuNumero === callback) {
        return "Parabéns" ;
    }
    return "Tente novamente" ;
}
console.log(resultadoSorteio(3, numeroSortiado()));