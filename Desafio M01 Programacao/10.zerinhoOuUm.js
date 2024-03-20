function solucao(jogadores) {
    let countZeros = 0;
    let countOnes = 0;

    for (let jogador of jogadores) {
        if (jogador.jogada === 0) {
            countZeros++;
        } else {
            countOnes++;
        }
    }

    if (countZeros === 1) {
        for (let jogador of jogadores) {
            if (jogador.jogada === 0) {
                console.log(jogador.nome);
                return;
            }
        }
    } else if (countOnes === 1) {
        for (let jogador of jogadores) {
            if (jogador.jogada === 1) {
                console.log(jogador.nome);
                return;
            }
        }
    }

    console.log("NINGUEM");
}

function processData(input) {
    solucao(JSON.parse(input));
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
