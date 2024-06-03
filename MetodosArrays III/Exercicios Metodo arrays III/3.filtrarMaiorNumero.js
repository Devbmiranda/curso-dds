const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNumero = numeros.reduce((maior, atual) => {
    return atual > maior ? atual : maior;
}, numeros[0]);

console.log("O maior número é:", maiorNumero);

// Teste com outros exemplos
const outrosNumeros = [100, 21, -55, 500, -210, 305, 35, -45, 80, 12];
const maiorOutroNumero = outrosNumeros.reduce((maior, atual) => {
    return atual > maior ? atual : maior;
}, outrosNumeros[0]);

console.log("O maior número em 'outrosNumeros' é:", maiorOutroNumero);


//Explicação do Código
//Array de Números:

//O array numeros contém vários números inteiros.
//Utilização do reduce():

//O método reduce() é usado para iterar sobre cada elemento do array e comparar cada número com o maior número encontrado até agora.
//A função de callback passada para reduce() recebe dois parâmetros: maior (o maior número encontrado até agora) e atual (o número atual do array).
//A comparação atual > maior ? atual : maior verifica se o número atual é maior que o maior número encontrado até agora. Se for, atual se torna o novo maior número; caso contrário, maior permanece o maior número.
//Resultado:

//O resultado final é o maior número do array numeros, que é então impresso no console.
//Teste com Outros Exemplos:

//O mesmo método é aplicado ao array outrosNumeros, demonstrando que a lógica funciona com diferentes conjuntos de números inteiros.