// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// O fatorial de um número é o produto dele pelos seus antecessores maiores que 0.
function calculaFatorial(num) {
    let resultado = 1; // Começamos com 1
    for (let i = 2; i <= num; i++) { // Multiplicamos de 2 até num
        resultado *= i;
    }
    return resultado;
}

const num = 5;
const fatorial = calculaFatorial(num);
console.log(fatorial);