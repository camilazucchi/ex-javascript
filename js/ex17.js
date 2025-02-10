/* Peça ao usuário para inserir sua idade com prompt.
Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console. */

const idade = prompt('Insira a sua idade: ');

if (idade >= 18) {
    console.log('Maior de idade.');
} else {
    console.log('Menor de idade.');
}