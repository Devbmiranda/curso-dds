// a funcao callback retonar um numero, se o retorno for negativo, o primeiro parametro vem antes do segundo
// se ro retorno da funcao for um numero maior que zero , o segundo parametro vem antes do primeiro
// se o retorno for zero mantem o primeiro e o segundo parametro


const numeros = [3, 20, 13, 50, 1, 4, 2, 13];

numeros.sort((primeiroElemento, segundoElemento) => {
    // funcao calback com sorte tem dois elementos a serem comparados (sempre)
    // se o primeior elemento for menor que o segundo (forma crescente), tem que ter retorno negaivo

    if (primeiroElemento < segundoElemento) {
        return -1;
    }

    if (primeiroElemento > segundoElemento) {
        return 1;
    } // aqui ja temos se é maior e menos

    return 0; // aqui se nao entra nem no primeiro e nem no segundo retorna zero

});
// ate aqui foi a ordenacao crescente
console.log(numeros);
// ------------------------------

//daqui para baixo fazemos decrescente invertendo a logica do crescente. simples
numeros.sort((primeiroElemento, segundoElemento) => {

    if (primeiroElemento < segundoElemento) {
        return 1;
    }

    if (primeiroElemento > segundoElemento) {
        return -1;
    } // aqui ja temos se é maior e menos

    return 0;
});


console.log(numeros);