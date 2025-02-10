// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

const numero = parseInt(prompt('Insira um número: '));

if (numero == 0) {
    console.log('O número é zero.');
} else if (numero > 0) {
    console.log('O número é positivo.');
} else {
    console.log('O número é negativo.');
}