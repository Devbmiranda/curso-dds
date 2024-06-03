const array = [
    [0, 1],
    [2, 3, 4],
    [14, 22, 98]
]; // transformar em um unico array

const arrayReduzido = array.reduce((acumulador, elementoAtual, indice, array) => {
    return [...acumulador, ...elementoAtual]; // spredoperation, ele junta todos os arrays 
}, []); // este array vazio sera colocado todos os valores 

console.log(arrayReduzido)