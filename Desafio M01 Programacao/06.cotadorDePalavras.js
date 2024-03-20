function solucao(texto) {
    const palavras = texto.trim().split(/\s+/).filter(palavra => palavra.length > 0);
    const numeroPalavras = palavras.length;
    console.log(numeroPalavras);
}

function processData(input) {
    const linhas = input.trim().split("\n");
    const texto = linhas.join(" ");
    solucao(texto);
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});


// Nesta implementação, a função solucao conta os espaços em branco no texto e incrementa 1 para considerar a última palavra. Em seguida, imprime o número total de palavras.

// Na função processData, removemos os espaços em branco extras do início e do fim do texto usando trim() antes de chamar a função solucao.

//Essa estrutura deve contar corretamente o número de palavras em um texto. Se precisar de mais alguma coisa, estou à disposição para ajudar!


// Nesta implementação, a função solucao conta os espaços em branco no texto e incrementa 1 para considerar a última palavra. Em seguida, imprime o número total de palavras.

//Na função processData, removemos os espaços em branco extras do início e do fim do texto usando trim() antes de chamar a função solucao.

//Essa estrutura deve contar corretamente o número de palavras em um texto. Se precisar de mais alguma coisa, estou à disposição para ajudar!