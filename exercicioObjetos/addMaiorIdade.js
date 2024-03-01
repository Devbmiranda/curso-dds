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

function adicionarMaiorIdade(listaUsuarios) {
    return listaUsuarios.map(usuario => ({
        ...usuario,
        maior_idade: usuario.idade > 17,
    }));
}

const usuariosComMaiorIdade = adicionarMaiorIdade(usuarios);
console.log(usuariosComMaiorIdade);
