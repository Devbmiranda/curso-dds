function solucao(carta) {
    const manilhas = {
        Q: "J",
        J: "K",
        K: "A",
        A: "2",
        2: "3",
        3: "Q"
    };

    console.log(manilhas[carta]);
}

function processData(input) {
    const cartaParaCima = input.trim();
    solucao(cartaParaCima);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});


// Neste código, criamos um objeto manilhas que mapeia cada carta para a sua respectiva manilha. Na função solucao, usamos o valor da carta virada para cima como chave para acessar o valor correspondente no objeto manilhas, e então imprimimos esse valor.

//Na função processData, recebemos a entrada, removemos espaços em branco extras com trim(), e chamamos a função solucao com a carta virada para cima como argumento.

//Dessa forma, o código determina corretamente a manilha com base na carta virada para cima. Se tiver mais alguma dúvida ou precisar de mais alguma coisa, estou à disposição para ajudar!