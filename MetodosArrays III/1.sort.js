// o metodo SORT, ele ordena os elementos do proprio array. por padrao, a ordenacao é de acoro com a tabela unicode.
// o computador so entende 1 e 0, para isso usa a tabela unicode, onde converte o caracter ara um numero e assim o computador entenda.
// opcionalmente vc pode passar uma funcao callback, que possui dois parametros., dsendo eles o primeiro e so segundo elemento a ser comparado.
// é importante lemrar que na tabela unicode, numeros vem antes de letras.


// exemplo de ordenacao padrao

// const array = [2, 4, 1, 20, 3, 43];

// array.sort(); // [1, 2, 20, 3, 4, 43] o 20 ve antes do 3, ordenacao padrao. assim colocamos a funcao callback, podendo ordenar de maneira mas efetiva


const numeros = [1, 30, 4, 6, 80, 34, 100, 256, 2, 5, 10];

numeros.sort();

console.log(numeros);