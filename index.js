// Vitorias e Derrotas do jogador

let  nomeJogador = "Nathaly";

let vitoria = 1;

//Estrutura de decisão para derrotas e vitorias

let ranking;

if (vitoria < 10) {
    ranking = "ferro";
}
else if (vitoria >= 11 && vitoria <= 20) {
    ranking = "Bronze";
}
else if (vitoria >= 21 && vitoria <= 50) {
    ranking = "Prata";
}
else if (vitoria >= 51 && vitoria <= 80) {
    ranking = "Ouro";
}
else if (vitoria >= 81 && vitoria <= 90) {
    ranking = "Diamante";
}
else if (vitoria >= 91 && vitoria <= 100) {
    ranking = "Lendário";
}

else  if(vitoria >= 101) {
    ranking = "Imortal";
}
// Exibe o saldo de vitórias
console.log(`O herói ${nomeJogador} tem o salde de ${vitoria} e está no vível de ${ranking}.`);
