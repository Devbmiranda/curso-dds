const usuario = {
    nome: "João",
    idade: 25,
    profissao: "programador",
    cor_preferida: "verde",
};

function gerarMensagem({ nome, idade, profissao, cor_preferida }) {
    return `Olá... Eu sou ${nome} e tenho ${idade} anos de idade. Sou ${profissao} e minha cor preferida é ${cor_preferida}!`;
}

const mensagem = gerarMensagem(usuario);
console.log(mensagem);
