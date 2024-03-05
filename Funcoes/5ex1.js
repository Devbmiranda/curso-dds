const pessoa = {
    nome: "joao",
    idade: 12,
    altura: 1.4,
    profissao: "estudante"
}

function apresentar(pessoa) {
    console.log(`olá! meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m, e sou ${pessoa.profissao}`);

}

apresentar(pessoa)
