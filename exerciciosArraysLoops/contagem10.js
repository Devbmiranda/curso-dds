// 1. Inicialize uma variável chamada "contagem" com valor zero.
let contagem = 0;

// 2. Use um loop for para percorrer o intervalo de 0 a 110.
for (let i = 0; i <= 110; i++) {
    // 3. Verifica se o número atual é igual a 10.
    if (i === 10) {
        contagem++;
    }
}

// 4. Imprima a contagem total do número 10 na tela.
console.log(`O número 10 aparece ${contagem} vez(es) no intervalo de 0 a 110.`);
