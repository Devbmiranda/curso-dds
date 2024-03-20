function solucao(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }

    const media = soma / lista.length;
    console.log(Math.round(media));
}

function processData(input) {
    const valoresDiarios = input.trim().split(" ").map(Number);
    solucao(valoresDiarios);
}

// Teste da função
const input = "2 3 4";
processData(input);
