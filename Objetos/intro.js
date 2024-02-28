const pessoa = { // objetos sempre utilizar colchetes
    nome: "Jose", // usa-se : para dar valor a propriedade
    altura: 1.83,
    peso: 60

};

pessoa['nome'] = "Pedro";
pessoa['altura'] = 1.80;
pessoa['peso'] = 70;

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura} de altura, e peso ${pessoa.peso}Kg.`); // crase consegue substituir or variaveis.
