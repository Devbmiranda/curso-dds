// function determinarFaixaEtaria(idade) {
//     if (idade <= 21) {
//         return "jovem";
//     } else if (idade < 66) {
//         return "adulto(a)";
//     } else {
//         return "idoso(a)";
//     }
// }

// function apresentar(pessoa) {
//     const faixaEtaria = determinarFaixaEtaria(pessoa.idade);

//     console.log(`Sou ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos, 
//             e sou ${pessoa.profissao}`);
// }

const pessoa1 = {
    nome: "Bruno",
    idade: 41,
    profissao: "DEV",
    apresentar: function () {
        const faixaEtaria = this.determinarFaixaEtaria(this.idade);

        console.log(`Sou ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos, e sou ${this.profissao}`);
    },
    determinarFaixaEtaria: function () {
        if (this.idade <= 21) {
            return "jovem";
        } else if (this.idade < 66) {
            return "adulto(a)";
        } else {
            return "idoso(a)";
        }
    }
}

pessoa1.apresentar();
// apresentar(pessoa1);
console.log(pessoa1.determinarFaixaEtaria());
