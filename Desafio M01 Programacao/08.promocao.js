function solucao(precos) {
    precos.sort((a, b) => a - b); // Ordena os preços em ordem crescente
    let total = 0;

    // Se o cliente comprou apenas 2 itens, o total é a soma dos preços
    if (precos.length === 2) {
        total = precos[0] + precos[1];
    } else {
        // Caso contrário, aplica-se a promoção
        const desconto = Math.min(...precos) / 2; // Calcula o desconto (50% do item mais barato)
        for (let i = 0; i < precos.length; i++) {
            if (i === 0) {
                total += precos[i] - desconto; // Aplica o desconto no primeiro item
            } else {
                total += precos[i]; // Adiciona os preços dos demais itens sem desconto
            }
        }
    }

    console.log(total);
}

function processData(input) {
    const lista = input.trim().split(" ");
    const precos = lista.map(Number);
    solucao(precos);
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


//Este código primeiro ordena os preços em ordem crescente. 
//Se o cliente comprou apenas dois itens, o código simplesmente 
//soma os preços. Caso contrário, aplica-se a promoção: 
//calcula-se o desconto (50% do item mais barato) e subtrai-se 
//esse desconto do primeiro item da lista, enquanto os preços dos 
//outros itens são somados normalmente.