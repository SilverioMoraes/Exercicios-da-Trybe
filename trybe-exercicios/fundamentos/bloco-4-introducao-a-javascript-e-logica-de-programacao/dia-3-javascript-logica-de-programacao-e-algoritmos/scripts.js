let fatorial = 1;
for (let index = 10; index > 0; index --) {
  fatorial *= index;
}
console.log(fatorial);

let word = 'tryber';
let inversa = '';
for (let i = 0; i < word.length; i ++) {
 inversa += word[word.length - 1 - i];
}
console.log(inversa);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array [0];
let menorPalavra = array [0];
for (let i = 0; i < array.length; i ++) {
  if (array[i].length > maiorPalavra.length) {
    maiorPalavra = array[i];
  }
}
console.log(maiorPalavra);
for (let i = 0; i < array.length; i ++) {
  if (array[i].length < menorPalavra.length) {
    menorPalavra = array[i];
  }
}
console.log(menorPalavra);

