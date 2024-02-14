// 1. Crie um array com números inteiros.
const numeros = [5, 10, 15, 20, 25];

// 2. Inicialize uma variável chamada "soma" com valor zero.
let soma = 0;

// 3. Use um loop for para percorrer o array e adicionar cada elemento à variável "soma".
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

// 4. Imprima a soma total na tela.
console.log("A soma total dos elementos é:", soma);
