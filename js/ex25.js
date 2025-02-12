// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirSaudacao(nomeInput) {
    console.log(`Olá, ${nomeInput}!`);
}

let nome = prompt("Qual é o seu nome?");
exibirSaudacao(nome);