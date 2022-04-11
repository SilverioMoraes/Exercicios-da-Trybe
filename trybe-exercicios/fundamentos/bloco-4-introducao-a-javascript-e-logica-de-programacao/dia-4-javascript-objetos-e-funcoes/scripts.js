/* let palavra = 'desenvolvimento'; */

function verificaPalindrome (palavra) {
    let Palindrome = palavra.split('').reverse().join('');
    if (Palindrome === palavra) {
        return true;
    }
    else {
        return false;
    }
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));