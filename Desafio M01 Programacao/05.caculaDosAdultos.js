function solucao(lista) {
    let menorIdadeMaiorDeIdade = Infinity;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] >= 18 && lista[i] < menorIdadeMaiorDeIdade) {
            menorIdadeMaiorDeIdade = lista[i];
        }
    }

    if (menorIdadeMaiorDeIdade === Infinity) {
        console.log("CRESCA E APARECA");
    } else {
        console.log(menorIdadeMaiorDeIdade);
    }
}

function processData(input) {
    const strings = input.trim().split(" ");
    const idades = strings.map(Number);
    solucao(idades);
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


//Neste código, a função solucao percorre a lista de idades fornecidas e verifica se a idade é maior ou igual a 18 anos (idade considerada como maior de idade). Se a idade for maior ou igual a 18 e for menor do que a menor idade já encontrada até o momento (menorIdadeMaiorDeIdade), atualizamos a variável menorIdadeMaiorDeIdade para essa idade.

//No final da iteração, se menorIdadeMaiorDeIdade ainda for Infinity, isso significa que ninguém é maior de idade na lista, então imprimimos "CRESCA E APARECA". Caso contrário, imprimimos a menor idade encontrada.

//Espero que isso ajude! Se tiver mais alguma dúvida ou precisar de mais alguma coisa, estou à disposição para ajudar!