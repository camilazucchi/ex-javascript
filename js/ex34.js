// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calculoAreaPerimetro(altura, largura) {
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);

    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}

const altura = 3;
const largura = 3;
calculoAreaPerimetro(altura, largura);