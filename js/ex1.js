let porcentagemDesconto = 0;
const quantidadeMilhas = 30200;

console.log(`Você possui ${quantidadeMilhas} milhas.`);

// Pessoas com uma quantidade de milhas inferior a 5.000 não recebem desconto
if (quantidadeMilhas < 5000) {
    console.log(`CATEGORIA 1`);
    console.log(`Seu desconto é de: ${porcentagemDesconto}%`);
} else if (quantidadeMilhas >= 30000) {
    // Pessoas com uma quantidade de milhas igual ou superior a 30.000 recebem 20% de desconto
    console.log(`CATEGORIA 2`);
    porcentagemDesconto = porcentagemDesconto + 20;
    console.log(`Seu desconto é de: ${porcentagemDesconto}%`);
} else {
    // Pessoas com uma quantidade de milhas superior a 5.000, mas inferior a 30.000, recebem 10% de desconto
    console.log(`CATEGORIA 3`);
    porcentagemDesconto = porcentagemDesconto + 10;
    console.log(`Seu desconto é de: ${porcentagemDesconto}%`);
}