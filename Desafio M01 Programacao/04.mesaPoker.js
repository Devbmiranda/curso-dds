function solucao(min, max, valores) {
    const valoresPermitidos = valores.filter(valor => valor >= min && valor <= max);
    console.log(valoresPermitidos);
}

function processData(input) {
    const lines = input.trim().split("\n");
    const min = parseInt(lines[0], 10);
    const max = parseInt(lines[1], 10);
    const valores = lines[2].split(" ").map(Number);
    solucao(min, max, valores);
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


//Na função solucao, usamos o método filter para criar um novo array contendo apenas os valores que satisfazem a condição especificada, ou seja, os valores que são maiores ou iguais a min e menores ou iguais a max. Em seguida, imprimimos esse array com console.log.

//Na função processData, dividimos a entrada em linhas, convertemos min e max para números inteiros e convertemos os valores da lista para números inteiros usando map(Number). Em seguida, chamamos a função solucao com esses valores.

//Essa estrutura deve resolver o problema conforme especificado no enunciado. Se precisar de mais alguma coisa, estou à disposição para ajudar!