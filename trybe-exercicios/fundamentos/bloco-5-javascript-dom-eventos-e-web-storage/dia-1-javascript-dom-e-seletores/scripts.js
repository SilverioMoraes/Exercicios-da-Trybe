document.getElementsByTagName("p")[1].innerText ="Eu me vejo trabalhando como desenvolvedor e adiquindo ainda mais conhecimento.";
document.getElementsByTagName("main")[0].style.backgroundColor = "rgb(76,164,109)";
document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";
document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1-JavaScript";
let paragrafo = document.getElementsByTagName("p");
for(let i = 0; i < paragrafo.length;i ++){
paragrafo[i].style.textTransform = "uppercase";
}
console.log(document.getElementsByTagName("p"));