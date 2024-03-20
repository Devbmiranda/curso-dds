function solucao(numero, limiteInferior, limiteSuperior) {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        console.log("PERTENCE");
    } else {
        console.log("NAO PERTENCE");
    }
}

function processData(input) {
    const lista = input.split(" ");
    solucao(parseInt(lista[0], 10), parseInt(lista[1], 10), parseInt(lista[2], 10));
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

// Nessa implementação, a função solucao verifica se o número está dentro do 
//intervalo delimitado por limiteInferior e limiteSuperior. 
//Se estiver dentro do intervalo, imprime "PERTENCE"; caso contrário, 
//imprime "NAO PERTENCE".

//Na função processData, o input é dividido em uma lista de strings 
//usando split(" "), e em seguida, os elementos dessa lista são convertidos 
//em números inteiros usando parseInt. 
//Por fim, a função solucao é chamada com esses valores.

//Essa estrutura deve resolver o problema proposto. 
//Se precisar de mais alguma coisa, estou à disposição para ajudar!