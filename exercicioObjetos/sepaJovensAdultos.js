const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

const jovens = usuarios.filter(usuario => usuario.idade < 18);
const adultos = usuarios.filter(usuario => usuario.idade >= 18);

console.log("jovens:", jovens);
console.log("adultos:", adultos);

//Neste código, usei o método filter para criar duas novas constantes, jovens e adultos, com base na idade dos usuários.

//Você pode testar o código com outros exemplos, adicionando ou removendo usuários da lista usuarios.

//Não se esqueça de fazer o commit do resultado no seu sistema de controle de versão após realizar as alterações.