const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    imprimirResumo: function () {
        let totalItens = 0;
        let totalPagar = 0;

        for (const produto of this.produtos) {
            totalItens += produto.qtd;
            totalPagar += produto.qtd * produto.precoUnit;
        }

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${totalItens} itens`);
        console.log(`Total a pagar: R$ ${(totalPagar / 100).toFixed(2)}`);
    },

    addProduto: function (produto) {
        const index = this.produtos.findIndex(p => p.id === produto.id);

        if (index !== -1) {
            // Produto já existe no carrinho, incrementa a quantidade
            this.produtos[index].qtd += produto.qtd;
        } else {
            // Produto não existe no carrinho, adiciona ao array
            this.produtos.push(produto);
        }
    },

    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);

        for (let i = 0; i < this.produtos.length; i++) {
            const produto = this.produtos[i];
            console.log(`Item ${i + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${(produto.qtd * produto.precoUnit / 100).toFixed(2)}`);
        }

        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}`);
    },

    calcularTotalDeItens: function () {
        let totalItens = 0;

        for (const produto of this.produtos) {
            totalItens += produto.qtd;
        }

        return totalItens;
    },

    calcularTotalAPagar: function () {
        let totalPagar = 0;

        for (const produto of this.produtos) {
            totalPagar += produto.qtd * produto.precoUnit;
        }

        return totalPagar;
    },

    calcularDesconto: function () {
        const totalItens = this.calcularTotalDeItens();
        const totalPagar = this.calcularTotalAPagar();

        let desconto = 0;

        // Desconto por item mais barato grátis
        if (totalItens > 4) {
            const produtoMaisBarato = this.produtos.reduce((min, p) => (p.precoUnit < min.precoUnit) ? p : min, this.produtos[0]);
            desconto += produtoMaisBarato.precoUnit;
        }

        // Desconto de 10% para compras acima de 100 reais
        if (totalPagar > 10000) {
            desconto += totalPagar * 0.1;
        }

        return desconto;
    }
};

// Testando
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};

carrinho.addProduto(novaBermuda);
carrinho.imprimirResumo();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
};

carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
