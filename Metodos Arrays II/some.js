// metodo de manipulaçao de arreis, testa todos os elementos se passa pela funcao callback

const nomes = ['joao', 'maria', 'jose', 'rodrigo'];
const numeros = [2, 5, 9, 7]

// const minhaFuncaoCalback = (nome) => {
//     return nome === 'joao';
// } 
//- funcao calback fora da funcao abaixo

// const resultado = nomes.some((nome) => {
//     return nome === 'joao'
// }); // recebe uma funcao callback

const resultado = numeros.some((numero) => {
    return numero % 2 === 0; // % é usado para o resto da divisao, se for divisivel por dois é par

});

console.log(resultado);

// retorna true