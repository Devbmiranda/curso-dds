function apresentar(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`Sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos, 
        e sou ${pessoa.profissao}`);
    } else if (pessoa.idade < 65) {
        console.log(`Sou ${pessoa.nome}, sou um(a) adulto de ${pessoa.idade} anos, 
        e sou ${pessoa.profissao}`);
    } else {
        console.log(`Sou ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos, 
            e sou ${pessoa.profissao}`);
    }
}

const pessoa1 = {
    nome: "Bruno",
    idade: 41,
    profissao: "DEV"
};
apresentar(pessoa1);

const pessoa2 = {
    nome: "Pedro",
    idade: 61,
    profissao: "Medico"
};
apresentar(pessoa2);

const pessoa3 = {
    nome: "Ana",
    idade: 19,
    profissao: "estudante"
};
apresentar(pessoa3);


