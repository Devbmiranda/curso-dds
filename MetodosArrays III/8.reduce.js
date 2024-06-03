// executa uma funcao callback, passada como argumento, paea cada elemento do array, que resulta em apenas um valor de retorno
// a funcao passda como argumento para para o metodo reduce recebe 4 argumentos.

// COMO SOMAR TODOS OS ITENS DO ARREY USANOD OSMENTE O FOR
const array = [0, 1, 2, 3, 4, 5, 6, 5, 8, 10];

// let somaTotal = array[0]; // indice do primeiro elemento.

// for (let i = 1; i < array.length; i++) {
//     const elementoAtual = array[i];

//     somaTotal = somaTotal + elementoAtual;
// }

// console.log(somaTotal); 

// //toda soma precisa de um acumulador

const valorReduce2 = array.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;

}, 10); // essse 10 é o valor inicial ja cumulado

console.log(valorReduce2);