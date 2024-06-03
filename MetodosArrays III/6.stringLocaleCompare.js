// retornas um numero se a string de referencia vem antes ou depois ou é igual a string comparada.

const pessoas = ['João', 'ana', 'carlos', 'bruno'];
// ordenando o array.

pessoas.sort((a, b) => {
    return a.localeCompare(b);
}); // esse codigo ele analisa a string e coloca em ordem crescente

console.log(pessoas);

// ordenacao decrescente

pessoas.sort((a, b) => {
    return b.localeCompare(a);
});
console.log(pessoas);