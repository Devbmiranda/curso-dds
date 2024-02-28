const produtosConsumidos = [
    {
        nome: "cerveja",
        precoUnit: 1000,
        quantidade: 10
    },
    {
        nome: "coca",
        precoUnit: 600, // multiplicar por 100, assim fica em centavos
        quantidade: 1

    },
    {
        nome: "pizza",
        precoUnit: 4500,
        quantidade: 1
    }
];

const cartao = {
    nome: "bruno",
    idade: 41,
    produtosConsumidos // aqui temos um shothand
};

let totalAPagar = 0; // conta deve sermpre iniciada com 0
for (let produto of produtosConsumidos) { // percorre toda a variavel
    totalAPagar += produto.precoUnit * produto.quantidade;
}

const totalFormatado = (totalAPagar / 100).toFixed(2); // primeiro faz a conta toda depois formata para imprimir na tela com o tofixed(2)
console.log(`Sr.(a) ${cartao.nome}, o total a pagar é R$ ${totalFormatado}`);