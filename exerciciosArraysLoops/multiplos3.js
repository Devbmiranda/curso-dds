// Criando um array de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Iterando pelo array e imprimindo os múltiplos de 3
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 3 === 0) {
        console.log(numeros[i] + ' é um múltiplo de 3');
    }
}