const valorDaCompra = 100;
const numeroDeParcelas = 3;

if (numeroDeParcelas === 1) {
    const desconto = valorDaCompra * 10 / 100;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Voce deve pagar R$ ${valorAPagar}, pois à vista tem 10% de desconto `)
} else {
    // parcelado
    const valorDaParcela = valorDaCompra / numeroDeParcelas;
    console.log(`Voce deve pagar ${numeroDeParcelas} parcela R$ ${valorDaParcela}`)
}