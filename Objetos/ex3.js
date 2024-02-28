const produtosConsumidos = [
    {
        nome: "cerveja",
        precoUnit: 10,
        quantidade: 10
    },
    {
        nome: "coca",
        precoUnit: 6,
        quantidade: 1

    },
    {
        nome: "pizza",
        precoUnit: 45,
        quantidade: 1
    }
];

const cartao = {
    nome: "bruno",
    idade: 41,
    produtosConsumidos // aqui temos um shothand
};


console.log(cartao.nome);
console.log(cartao.idade)
cartao.idade = 31;
console.log(cartao.idade)
console.log(cartao.produtosConsumidos[0].nome); // colocando o colchetes e incluindo um numero vc acessa o indice do objeto, ntes caso o primeiro
console.log(cartao.produtosConsumidos[produtosConsumidos.length - 1].precoUnit)
