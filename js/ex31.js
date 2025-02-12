// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

const nome = 'Alex';
const altura = 1.64;
const peso = 62.0;
console.log(`Olá, ${nome}. Sua altura é ${altura} e seu peso é ${peso}. Vamos descobrir seu IMC?`);

function calculaIMC(peso, altura) {
    // Dividir o peso pela altura
    const calculo = peso / Math.pow(altura, 2); // Math.pow eleva a altura ao quadrado
    return calculo;
}

const imc = calculaIMC(peso, altura).toFixed(2); // Formata o número utilizando notação de ponto fixo, o argumento limita quantas casas decimais serão usadas
console.log(`Seu IMC é ${imc}.`);