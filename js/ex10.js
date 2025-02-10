// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

// Exibe uma caixa de diálogo solicitando ao usuário a entrada do número
let num = parseInt(prompt('Digite um número: '), 10);
let cont = 0;

while (cont <= num) {
    console.log(cont);
    cont++;
}