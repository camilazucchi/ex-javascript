function calcularMedia(nota1, nota2, nota3, nota4) {
    const sum = nota1 + nota2 + nota3 + nota4;
    const media = sum / 4;
    return media;
}

function verificarAprovacao(media) {
    return media >= 5 ? 'Aprovado' : 'Reprovado';
}

let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

const media = calcularMedia(nota1, nota2, nota3, nota4);
const aprovacao = verificarAprovacao(media);
console.log(aprovacao);