// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

console.log("- Conversor de real para dólar JS -");

function converteDolarParaReal(valor) {
    const cotacao = 4.80;
    const conversao = valor * cotacao;
    return conversao;
}

const valor = 30.0;
const total = converteDolarParaReal(valor);

console.log(`Cotação: R$4.80
Valor para conversão: $${valor}
Total: R$${total.toFixed(2)}`);