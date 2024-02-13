const valorDaCompra = 100;
const numeroDeParcelas = 12;

if (numeroDeParcelas === 1) {
    const desconto = valorDaCompra * 10 / 100;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Voce deve pagar R$ ${valorAPagar}, pois à vista tem 10% de desconto.`)
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    // parcelado sem juros
    const valorDaParcela = valorDaCompra / numeroDeParcelas; // poderia ter aplicado no calculo  const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2)
    console.log(`Voce deve pagar em ${numeroDeParcelas} sem juros  R$ ${valorDaParcela.toFixed(2)}.`)
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    // parcelado com juros
    const valorAPagarComJuros = (valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`voce deve pagar em ${numeroDeParcelas}x de R$ ${valorDaParcela} totalizando R$ ${valorAPagarComJuros}, devido a incidencia de juros.`);
} else {
    // numero de parcelas invalido
    console.log("Numero de parcelas inválido.")
}