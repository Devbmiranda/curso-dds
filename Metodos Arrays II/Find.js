// esta aula, você aprenderá sobre o método find para manipulação de arreis. Este método retorna o 
//primeiro elemento do arreio que corresponde à condição implementada na função callback. 
//Caso nenhum elemento atenda à condição, o método retorna undefined. 
//Um exemplo básico de uso do find é dado com um arreio de números [1, 2, 3, 4, 5], 
//onde a condição é que o elemento seja maior que 2. O resultado seria o número 3, 
//que é o primeiro elemento que atende à condição. 
//Se você quiser aprender mais sobre esse método e como utilizá-lo em seu código, 
//essa aula será de grande ajuda.

// Uso do método find para manipulação de vetores
// Como implementar uma função callback para usar com o método find
// O que o método find retorna quando encontra um elemento correspondente à condição
// O que o método find retorna quando não encontra nenhum elemento correspondente à condição
// Exemplo básico de uso do método find
// Como realizar uma condição no método find para buscar determinados elementos
// As vantagens de usar o método find em comparação com outros métodos de manipulação de vetores
// Como aplicar o método find em diferentes situações ou tipos de dados.

const usuarios = [
    { nome: 'Joao', idade: 42 },
    { nome: 'Bruno', idade: 41 },
    { nome: 'Anna', idade: 32 },
    { nome: 'Rafaela', idade: 17 }
];


const resultado = usuarios.find((usuario) => {
    return usuario.nome === 'Joao';
});

console.log(resultado)