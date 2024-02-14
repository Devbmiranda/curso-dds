// // 1. Crie uma string.
// const palavra = "programming";

// // 2. Inicialize um objeto chamado "contagemLetras" para armazenar a contagem de cada letra.
// let contagemLetras = {};

// // 3. Use um loop for para percorrer a string e contar as letras.
// for (let i = 0; i < palavra.length; i++) {
//     // Obtém a letra atual
//     let letra = palavra[i].toLowerCase(); // Converte para minúscula para considerar maiúsculas e minúsculas

//     // Verifica se a letra já está no objeto de contagem
//     if (contagemLetras[letra] === undefined) {
//         contagemLetras[letra] = 1; // Se não existir, inicializa a contagem para 1
//     } else {
//         contagemLetras[letra]++; // Se existir, incrementa a contagem
//     }
// }

// // 4. Imprima a contagem de cada letra na tela.
// for (let letra in contagemLetras) {
//     console.log(`A letra '${letra}' aparece ${contagemLetras[letra]} vez(es).`);
// }
// 1. Crie uma string.

const palavra = "programming"; // 11 letras

// 2. Inicialize uma variável chamada "contagemTotal" com valor zero.
let contagemTotal = 0;

// 3. Use um loop for para percorrer a string e incrementar a variável "contagemTotal".
for (let i = 0; i < palavra.length; i++) {
    // Verifica se o caractere atual é uma letra (ignorando espaços e outros caracteres não alfabéticos)
    if (palavra[i].match(/[a-zA-Z]/)) {
        contagemTotal++;
    }
}

// 4. Imprima a contagem total de letras na tela.
console.log(`O total de letras na palavra é: ${contagemTotal}`);