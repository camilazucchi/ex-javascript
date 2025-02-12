// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function mostrarMultiplicao(num) {
    return num * num;
}

const num = parseInt(prompt("Insira um número: "));
const resultado = mostrarMultiplicao(num);
console.log(resultado);
