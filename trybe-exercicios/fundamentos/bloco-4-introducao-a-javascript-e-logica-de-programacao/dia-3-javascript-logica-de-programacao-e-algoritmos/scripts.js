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

let maiorNprimo = 0;

for (let n = 0; n <=50; n ++) {
  let primo = true;
  for(let d = 2; d < n; d ++) {
    if (n % d === 0){
      primo = false;
    }
  }
  if (primo) {
    maiorNprimo = n;
  }
}
console.log(maiorNprimo);

let n = 5;
let asteristico = '*';
let linha ='';
for (let i = 0; i < n; i ++) {
  linha = linha + asteristico ;
};
// console.log(linha);
for (let i = 0; i < n; i ++) {
  console.log(linha);
};

let tamanho = 5;
let asteristico = '*';
let linha ='';
let pos = tamanho;
for (let i = 0; i <= tamanho; i ++) {
  for(let j = 0; j <= tamanho; j ++) {
    if (j < pos){
      linha = linha + ' ';
    }
    else {
      linha = linha + asteristico;
    }
  }
  console.log(linha);
  linha = '';
  pos -= 1;
};

