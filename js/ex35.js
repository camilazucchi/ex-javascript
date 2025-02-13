// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(num) {
    for (i = 0; i <= 10; i++) {
        const resultado = num * i;
        console.log(`${num} x ${i} = ${resultado}`);
    }
}

const num = 2;
tabuada(2);