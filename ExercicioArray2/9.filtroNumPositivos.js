const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

function filtrarNumerosPositivos(array) {
    const numerosPositivos = array.filter(numero => numero > 0);
    return numerosPositivos;
}

const numerosPositivos = filtrarNumerosPositivos(numeros);
console.log(numerosPositivos);
