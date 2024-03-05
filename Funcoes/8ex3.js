function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";
    } else if (idade < 66) {
        return "adulto(a)";
    } else {
        return "idoso(a)";
    }
}

function apresentar(pessoa) {
    const faixaEtaria = determinarFaixaEtaria(pessoa.idade);

    console.log(`Sou ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos, 
            e sou ${pessoa.profissao}`);
}

const pessoa1 = {
    nome: "Bruno",
    idade: 41,
    profissao: "DEV"
};

apresentar(pessoa1);

