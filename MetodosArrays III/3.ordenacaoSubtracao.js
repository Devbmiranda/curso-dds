// aqui iniciaremos um processo de subtraçao.

const numeros = [3, 20, 13, 50, 1, 4, 2, 13];
// oredenacao crescente
numeros.sort((primeiroElemento, segundoElemento) => {
    return primeiroElemento - segundoElemento;
    //assim ele a ordenacao crescente tabem. 
});

console.log(numeros);
// ------------------------------

// ordenacao decrescente
numeros.sort((primeiroElemento, segundoElemento) => {
    return segundoElemento - primeiroElemento;

});


console.log(numeros);