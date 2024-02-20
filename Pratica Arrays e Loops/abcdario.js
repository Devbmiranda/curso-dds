function solucao(letra, palavras) {
    let criancasPerderam = 0;

    for (let palavra of palavras) {
        if (palavra.charAt(0) !== letra) {
            criancasPerderam++;
        }
    }

    console.log(criancasPerderam);
}

function processData(input) {
    const { letra, palavras } = JSON.parse(input)[0];
    solucao(letra, palavras);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
