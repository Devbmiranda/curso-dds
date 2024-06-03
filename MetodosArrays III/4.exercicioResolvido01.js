const usuarios = [
    { id: 11, nome: 'joao', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
    { id: 123, nome: 'rodrigo', idade: 17 },
    { id: 176, nome: 'bruno', idade: 41 }
];

console.log(usuarios);


usuarios.sort((primeiro, segundo) => {
    return primeiro.id - segundo.id;

});

console.log(usuarios);

usuarios.sort((primeiro, segundo) => {
    return segundo.id - primeiro.id;

});

console.log(usuarios);