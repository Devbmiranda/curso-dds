// Você pode usar o método every() para verificar se todos os números no array são pares.


const numeros = [0, 122, 4, 6, 7, 8, 44];

function validarArrayDeNumerosPares(array) {
    if (array.every(numero => numero % 2 === 0)) {
        console.log("array válido");
    } else {
        console.log("array inválido");
    }
}

validarArrayDeNumerosPares(numeros);

// Neste código, every() é usado para verificar se todos os números no array são pares. 
// Se todos forem pares, ele imprimirá "array válido", caso contrário, imprimirá "array inválido".