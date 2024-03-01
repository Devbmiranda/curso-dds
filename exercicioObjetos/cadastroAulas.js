const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
};

const listaDeAulas = [
    { identificador: 1, nome_da_aula: "Introdução a programação" },
    { identificador: 2, nome_da_aula: "Variáveis" },
    { identificador: 3, nome_da_aula: "Condicionais" },
    { identificador: 4, nome_da_aula: "Arrays" },
];

function adicionarAulasAoCurso(curso, listaDeAulas) {
    curso.aulas = listaDeAulas.map(aula => ({
        identificador: aula.identificador,
        nome_da_aula: aula.nome_da_aula,
    }));
    return curso;
}

const cursoAtualizado = adicionarAulasAoCurso(curso, listaDeAulas);
console.log(cursoAtualizado);
