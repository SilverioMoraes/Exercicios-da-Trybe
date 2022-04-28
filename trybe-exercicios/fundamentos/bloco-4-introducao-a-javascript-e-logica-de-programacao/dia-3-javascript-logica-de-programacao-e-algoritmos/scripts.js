let fatorial = 1;
for (let index = 10; index > 0; index --)
 {
  fatorial *= index;
}
console.log(fatorial);

let word = 'tryber';
let inversa = '';
for (let i = 0; i < word.length; i ++) {
 inversa += word[word.length - 1 - i];
}
console.log(inversa);