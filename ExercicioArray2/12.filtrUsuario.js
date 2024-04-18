const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

// Filtro para programadores e programadoras maiores de 20 anos
const programadores = pessoas.filter(function (pessoa) {
    return pessoa.profissao === 'Programador' && pessoa.idade > 20;
});

// Filtro para jornalistas com mais de 30 anos
const jornalistas = pessoas.filter(function (pessoa) {
    return pessoa.profissao === 'Jornalista' && pessoa.idade > 30;
});

// Filtro para pessoas jovens (até 29 anos)
const jovens = pessoas.filter(function (pessoa) {
    return pessoa.idade <= 29;
});

// Resultados
const resultados = [programadores, jornalistas, jovens];

console.log(resultados);

