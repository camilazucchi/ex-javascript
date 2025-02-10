// Passa uma mensagem para o usuário
alert('Boas vindas ao jogo do número secreto!');

const numeroSecreto = 4;
let chute;
let tentativas = 1;

// Enquanto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');

    if (numeroSecreto == chute) {
        alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    tentativas++;
}