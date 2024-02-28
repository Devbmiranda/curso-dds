const pessoa = {
    nome: "bruno",
    idade: 41,
    cidade: "São Paulo",
    profissao: "Dev"

};

// const nome = pessoa.nome;
// const idade = pessoa.idade;

const { nome, idade, cidade, ...outros } = pessoa; // desusturacao, pegar o nome da variavel que vc quer usar "nome"

console.log(nome, idade, cidade); // pode fazer com uma ou varias variaveis.
console.log(outros)