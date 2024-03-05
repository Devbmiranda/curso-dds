const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor: valor
        });
        return `Deposito de R$${valor / 100} realizado para o cliente: ${this.nome}.`;
    },

    sacar: function (valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}.`;
        }

        this.saldo -= valor;
        this.historicos.push({
            tipo: "Saque",
            valor: valor
        });
        return `Saque de R$${valor / 100} realizado para o cliente: ${this.nome}.`;
    },

    extrato: function () {
        let historicoStr = "Histórico:\n";
        for (const transacao of this.historicos) {
            historicoStr += `${transacao.tipo} de $${transacao.valor / 100}\n`;
        }

        return `Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}\n${historicoStr}`;
    }
};

// Testando as operações
console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
