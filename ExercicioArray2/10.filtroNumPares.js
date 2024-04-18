const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

function filtrarNumerosPares(array) {
    const numerosPares = array.filter(numero => numero % 2 === 0);
    return numerosPares;
}

const numerosPares = filtrarNumerosPares(numeros);
console.log(numerosPares);
