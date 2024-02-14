// Criando um array de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Inicializando a variável para armazenar a soma dos pares
let somaDosPares = 0;

// Filtrando e imprimindo apenas os números pares
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i] + ' é um número par');
        somaDosPares += numeros[i]; // Adicionando o número par à soma
    }
}

// Imprimindo a soma dos números pares
console.log('A soma dos números pares é: ' + somaDosPares);