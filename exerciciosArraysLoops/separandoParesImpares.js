// Criando um array de números
const numeros = [15, 7, 23, 9, 45, 12, 36, 18, 5, 28];

// Inicializando arrays para armazenar pares e ímpares
const pares = [];
const impares = [];

// Separando os números pares e ímpares
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
}

// Imprimindo os arrays de pares e ímpares
console.log('Números pares: ', pares);
console.log('Números ímpares: ', impares);