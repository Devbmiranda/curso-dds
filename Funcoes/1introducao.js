const pessoa = {
    nome: "Bruno",
    idade: 41,
    profissao: "DEV"
}

if (pessoa.idade < 25) {
    console.log(`Sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos, 
e sou ${pessoa.profissao}`);
} else if (pessoa.idade < 65) {
    console.log(`Sou ${pessoa.nome}, sou um(a) adulto de ${pessoa.idade} anos, 
e sou ${pessoa.profissao}`);
} else {
    console.log(`Sou ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos, 
    e sou ${pessoa.profissao}`);

};

const pessoa2 = {
    nome: "Pedro",
    idade: 61,
    profissao: "Medico"

}
if (pessoa2.idade < 25) {
    console.log(`Sou ${pessoa2.nome}, sou um(a) jovem de ${pessoa2.idade} anos, 
e sou ${pessoa2.profissao}`);
} else if (pessoa2.idade < 65) {
    console.log(`Sou ${pessoa2.nome}, sou um(a) adulto de ${pessoa2.idade} anos, 
e sou ${pessoa2.profissao}`);
} else {
    console.log(`Sou ${pessoa2.nome}, sou um(a) idoso(a) de ${pessoa2.idade} anos, 
    e sou ${pessoa2.profissao}`);
}

const pessoa3 = {
    nome: "Ana",
    idade: 19,
    profissao: "estudante"

}
if (pessoa3.idade < 25) {
    console.log(`Sou ${pessoa3.nome}, sou um(a) jovem de ${pessoa3.idade} anos, 
e sou ${pessoa3.profissao}`);
} else if (pessoa3.idade < 65) {
    console.log(`Sou ${pessoa3.nome}, sou um(a) adulto de ${pessoa3.idade} anos, 
e sou ${pessoa3.profissao}`);
} else {
    console.log(`Sou ${pessoa3.nome}, sou um(a) idoso(a) de ${pessoa3.idade} anos, 
    e sou ${pessoa3.profissao}`);
}
// a fucao vai ajudar a nao ter que escrever varias vezes a mesma coisa para os mesmo casos.
// funcao é um bloco de codigos que se faz varias vezes ao longo do projeto.