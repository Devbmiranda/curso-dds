// const usuarios = [
//     { nome: 'Joao', idade: 42 },
//     { nome: 'Bruno', idade: 41 },
//     { nome: 'Anna', idade: 32 },
//     { nome: 'Rafaela', idade: 17 }
// ];


// const fiscalizarFesta = (arrayObjetos) => {
//     const resultado = arrayObjetos.every((objeto) => {
//         return objeto.idade > 17
//     });
//     if (resultado) {
//         console.log("Festa liberada!");
//     } else {
//         console.log("Possui menor de iadade!");
//     }
// };

// fiscalizarFesta(usuarios);





function verificaFesta(redeObjetos) {
    // Verifica se todos os usuários são maiores de idade
    const todosMaioresIdade = redeObjetos.every(usuario => usuario.idade >= 18);

    // Se todos forem maiores de idade, exibe "festa liberada"
    if (todosMaioresIdade) {
        console.log("festa liberada");
    } else {
        console.log("possui menor de idade");
    }
}

// Exemplo de uso:
const redeObjetos = [
    { nome: "João", idade: 20 },
    { nome: "Maria", idade: 22 },
    { nome: "Pedro", idade: 17 }
];

verificaFesta(redeObjetos);