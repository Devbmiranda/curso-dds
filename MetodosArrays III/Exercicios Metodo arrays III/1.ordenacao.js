// a) Ordenar o array abaixo em ordem crescente.
const numeros1 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numeros1.sort((a, b) => a - b);
console.log("a) Ordem crescente:", numeros1);

// b) Ordenar o array abaixo em ordem decrescente.
const numeros2 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numeros2.sort((a, b) => b - a);
console.log("b) Ordem decrescente:", numeros2);

// c) Ordenar o array abaixo em ordem crescente, com base nos valores dos pontos de código Unicode.
const numeros3 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numeros3.sort();
console.log("c) Ordem crescente por Unicode:", numeros3);

// d) Ordenar o array abaixo em ordem alfabética.
const frutas1 = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas1.sort((a, b) => a.localeCompare(b, 'pt', { sensitivity: 'base' }));
console.log("d) Ordem alfabética:", frutas1);

// e) Ordenar o array abaixo em ordem alfabética decrescente.
const frutas2 = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas2.sort((a, b) => b.localeCompare(a, 'pt', { sensitivity: 'base' }));
console.log("e) Ordem alfabética decrescente:", frutas2);

// f) Ordenar o array abaixo em ordem crescente, de acordo com a quantidade de caracteres (do que tem menos caracteres, para o que tem mais).
const frutas3 = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas3.sort((a, b) => a.length - b.length);
console.log("f) Ordem crescente por quantidade de caracteres:", frutas3);

// Teste com outros exemplos
const outrosNumeros = [100, 21, 55, 500, 210, 305, 35, 45, 80, 12];
outrosNumeros.sort((a, b) => a - b);
console.log("Teste ordem crescente com outros números:", outrosNumeros);

const outrasFrutas = ["Melancia", "Abacate", "Ameixa", "Laranja", "Figo"];
outrasFrutas.sort((a, b) => a.localeCompare(b, 'pt', { sensitivity: 'base' }));
console.log("Teste ordem alfabética com outras frutas:", outrasFrutas);


//Explicação do Código
//Ordenação em ordem crescente e decrescente:

//Utilizamos a função sort() com uma função de comparação (a, b) => a - b para ordem crescente e (a, b) => b - a para ordem decrescente.
//Ordenação com base nos valores dos pontos de código Unicode:

//Utilizamos o método sort() sem função de comparação, o que por padrão ordena os elementos como strings baseados nos valores Unicode.
//Ordenação alfabética e alfabética decrescente:

//Utilizamos localeCompare para garantir a ordenação correta levando em conta a sensibilidade do idioma ('pt' para Português) e ignorando diferenças entre maiúsculas e minúsculas.
//Ordenação por quantidade de caracteres:

//Utilizamos uma função de comparação (a, b) => a.length - b.length para ordenar as strings pelo seu comprimento.
