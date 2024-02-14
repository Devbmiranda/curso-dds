// Criando um array de números
const numeros = [15, 7, 23, 9, 45, 12, 36, 18, 5, 28];

// Inicializando a variável para armazenar o menor número
let menorNumero = numeros[0]; // Assumindo que o primeiro número é o menor inicialmente

// Encontrando o menor número no array
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menorNumero) {
        menorNumero = numeros[i];
    }
}

// Imprimindo o menor número
console.log('O menor número no array é: ' + menorNumero);