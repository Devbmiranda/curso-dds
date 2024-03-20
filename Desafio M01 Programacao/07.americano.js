function solucao(numeros) {
    const S = numeros.reduce((acc, curr) => acc + curr, 0);
    const posicaoGoleiro = S % numeros.length === 0 ? numeros.length : S % numeros.length;
    console.log(posicaoGoleiro);
}

function processData(input) {
    const numeros = input.trim().split(" ").map(Number);
    solucao(numeros);
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


//Nesta versão, solucao é a função responsável por determinar a posição do goleiro, processData é responsável por processar a entrada e chamar a função solucao, e a leitura da entrada é feita através de process.stdin como especificado.

//Teste com os casos de exemplo para garantir que está funcionando conforme o esperado.