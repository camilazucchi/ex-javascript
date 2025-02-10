let porcentagemDesconto = 0;
const quantidadeMilhas = 5200;

console.log(`Você possui ${quantidadeMilhas} milhas.`);

// Pessoas com uma quantidade de milhas inferior a 5.000 não recebem desconto
if (quantidadeMilhas < 5000) {
    console.log(`Seu desconto é de: ${porcentagemDesconto}%`);
} else if (quantidadeMilhas >= 30000) {
    // Pessoas com uma quantidade de milhas igual ou superior a 30.000 recebem 20% de desconto
    porcentagemDesconto = porcentagemDesconto + 20;
    console.log(`Seu desconto é de: ${porcentagemDesconto}%`);
} else if (quantidadeMilhas > 5000) {
    // Pessoas com uma quantidade de milhas superior a 5.000, mas inferior a 30.000, recebem 10% de desconto
    porcentagemDesconto = porcentagemDesconto + 10;
    console.log(`Seu desconto é de: ${porcentagemDesconto}%`);
}