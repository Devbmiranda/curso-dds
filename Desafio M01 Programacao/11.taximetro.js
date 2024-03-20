// Função para calcular o valor da viagem
function calcularValorViagem(minutos, quilometros) {
    // Preços iniciais por minuto e por quilômetro
    const precoMinuto = 50;
    const precoQuilometro = 70;

    // Calcula o valor base
    let valor = precoMinuto * minutos + precoQuilometro * quilometros;

    // Aplica descontos se exceder 10km ou 20 minutos
    if (quilometros > 10) {
        valor += (quilometros - 10) * 50; // Cada km adicional custa 50 centavos
    }
    if (minutos > 20) {
        valor += (minutos - 20) * 30; // Cada minuto adicional custa 30 centavos
    }

    // Arredonda o valor para baixo
    return Math.floor(valor);
}

// Função principal para processar a entrada e imprimir o resultado
function processData(input) {
    // Divide a entrada nos valores de minutos e quilômetros
    const entrada = input.trim().split(" ");
    const minutos = parseInt(entrada[0]);
    const quilometros = parseFloat(entrada[1]);

    // Calcula o valor da viagem
    const valor = calcularValorViagem(minutos, quilometros);

    // Retorna o valor como saída
    return valor;
}

// Lê a entrada do console e imprime a saída
process.stdin.resume();
process.stdin.setEncoding("ascii");
let input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    const valorViagem = processData(input);
    console.log(valorViagem);
});
