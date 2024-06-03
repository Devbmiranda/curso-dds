const array = [0, 1, 2, 3, 4];

const valorReduce = array.reduce((acumulador, elementoAtual, indice, array) => {
    acumulador = acumulador + elementoAtual;
    return acumulador;

}, 10);

console.log(valorReduce);