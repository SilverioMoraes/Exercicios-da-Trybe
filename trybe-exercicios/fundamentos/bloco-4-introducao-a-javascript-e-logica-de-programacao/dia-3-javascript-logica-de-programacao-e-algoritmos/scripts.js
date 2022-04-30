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
for (i = 0; i <= tamanho; i ++) {
  console.log(linha);
  linha = linha + asteristico ;
}

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

let n = 5;
let asteristico = '*';
let linha ='';
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let i = 0; i <= meio; i ++) {
  for(let j = 0; j <= n; j ++) {
    if (j > esquerda && j < direita){
      linha = linha + asteristico;
    }
    else {
      linha = linha + ' ';
    }
  }
  console.log(linha);
  linha = '';
  direita += 1;
  esquerda -= 1;
}

let n = 7;
let asteristico = '*';
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let i = 1; i <= meio; i ++) {
  let linhas = '';
  for (let j = 1; j <= n; j ++) {
    if (j == esquerda || j == direita || i == meio) {
      linhas += asteristico;
    }
      else {
        linhas += ' ';
      }
  }
  esquerda -= 1;
  direita += 1;
  console.log(linhas);
}