const pecaDeXadrez = "rei";

switch (pecaDeXadrez.toLowerCase()) {
    case "rei":
        console.log("Rei->qualquer direção uma casa");
        break;
    case "cavalo":
        console.log("Cavalo->duas casa vira uma casa qualquer direção pode pular peças");
        break;
    case "bispo":
        console.log("Bispo->diagonais quantas casas quiser");
        break;
    case "rainha":
        console.log("Rainha->qualquerr casa e quantas quiser");
        break;
    case "peão":
        console.log("Peão->para frente uma casa primeira jogada pode pular duas casa");
        break;
}
