// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function mostrarMaior(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

const num = mostrarMaior(20, 40);
console.log(num);