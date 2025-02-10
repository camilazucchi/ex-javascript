// Passa uma mensagem para o usuário
alert('Boas vindas ao jogo do número secreto!');

const numeroSecreto = Math.floor(Math.random() * 10);
let chute;
let tentativas = 1;

// Enquanto
while (chute != numeroSecreto) {
    chute = parseInt(prompt('Escolha um número entre 1 e 10'));

    if (numeroSecreto == chute) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

// Operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);