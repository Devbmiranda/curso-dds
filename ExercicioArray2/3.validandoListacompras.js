// Você pode usar a função some() para verificar se algum elemento da lista é igual a "cerveja" ou "vodka".

const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

function verificarListaDeCompras(lista) {
    if (lista.some(item => item === "cerveja" || item === "vodka")) {
        console.log("revise sua lista, joão. possui bebida com venda proibida!");
    } else {
        console.log("tudo certo, vamos às compras!");
    }
}

verificarListaDeCompras(palavras);


// Essa função verificarListaDeCompras verifica se algum item da lista é igual a "cerveja" ou "vodka" 
//usando some(). Se encontrar algum desses itens, imprime uma mensagem informando que a 
//lista precisa ser revisada. Caso contrário, imprime uma mensagem indicando que está tudo certo para ir às compras.