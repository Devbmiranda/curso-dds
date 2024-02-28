
// spread ... ele espalha o conteudo
// quando isso é util? conectyar com outro servidor 
const pessoa = {
    nome: "bruno",
    idade: 38,
    cidade: "São Paulo",
    profissao: "DEV"
};

const endereco = {
    rua: "Aqui",
    numero: "256",
    bairro: "Bairro Legal"
};

const objetoFundido = {
    ...pessoa,
    ...endereco,
    novaPropriedade: 20 // posso colocar uma nova propriedade

};
console.log(objetoFundido)