// // ode usar o método every() para verificar se todos os números no array são pares.

const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

function validarUsuariosHabilitados(array) {
    if (array.every(usuario => usuario.idade >= 18 && usuario.habilitado)) {
        console.log("Todos os usuários são maiores de idade e habilitados.");
    } else {
        console.log("Há usuários menores de idade ou não habilitados.");
    }
}

validarUsuariosHabilitados(usuarios);


// filtra os usuários entre 18 e 65 anos e, em seguida, verifica se todos eles estão habilitados.

// const usuarios = [
//     {
//         nome: "André",
//         idade: 29,
//         habilitado: false,
//     },
//     {
//         nome: "Marcos",  
//         idade: 70,
//         habilitado: true,
//     },
//     {
//         nome: "Ana",
//         idade: 35,
//         habilitado: true,
//     },
//     {
//         nome: "Vinícius",
//         idade: 44,
//         habilitado: true,
//     },
//     {
//         nome: "Carlos",
//         idade: 17,
//         habilitado: false,
//     },
//     {
//         nome: "Maria",
//         idade: 19,
//         habilitado: true,
//     },
// ];

// function validarUsuarios(array) {
//     const usuariosFiltrados = array.filter(usuario => usuario.idade >= 18 && usuario.idade <= 65);

//     if (usuariosFiltrados.length === 0) {
//         console.log("Não há usuários dentro da faixa etária de 18 a 65 anos.");
//         return;
//     }

//     if (usuariosFiltrados.every(usuario => usuario.habilitado)) {
//         console.log("Todos passaram no teste.");
//     } else {
//         console.log("Todos precisam estar habilitados.");
//     }
// }

// validarUsuarios(usuarios);


// 1.Usamos o método filter() para filtrar os usuários com idade entre 18 e 65 anos.
// 2.Verificamos se o array resultante do filtro não está vazio. Se estiver vazio, significa que não há usuários dentro da faixa etária especificada, então imprimimos uma mensagem correspondente e saímos da função.
//3.Em seguida, usamos o método every() para verificar se todos os usuários filtrados estão habilitados.
//4.Dependendo do resultado da validação, imprimimos a mensagem apropriada.