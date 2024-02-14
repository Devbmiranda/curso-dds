// Criando um array de números
const numeros = [15, 7, 23, 9, 45, 12, 36, 18, 5, 28, 100, 105];

// Inicializando a variável para armazenar o maior número
let maiorNumero = numeros[0]; // Assumindo que o primeiro número é o maior inicialmente

// Encontrando o maior número no array
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

// Imprimindo o maior número
console.log('O maior número no array é: ' + maiorNumero);
