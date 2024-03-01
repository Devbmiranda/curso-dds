const livro = {
    nome: 'O poder do hábito',
    capitulos: [
        {
            nome: "O loop do hábito",
        },
        {
            nome: "O cérebro ansioso",
        },
        {
            nome: "A regra de ouro da mudança de hábito",
        },
        {
            nome: "Hábitos angulares, ou a balada de Paul O`neill",
        },
        {
            nome: "Starbucks e o hábito do sucesso",
        },
        {
            nome: "O poder de uma crise",
        },
        {
            nome: "Como a target sabe o que você quer antes que você saiba",
        },
        {
            nome: "A Saddleback Church e o boicote aos ônibus de Montgomery",
        },
        {
            nome: "A neorologia do livre-arbítrio",
        },
    ]
};

// Adicionando a propriedade 'numero' em cada capítulo
livro.capitulos.forEach((capitulo, indice) => {
    capitulo.numero = indice + 1;
});

console.log(livro);



// Neste código, utilizei o método forEach para iterar sobre cada capítulo do livro e adicionei a propriedade numero com base no índice da iteração.

//Você pode testar o código com outros exemplos, adicionando ou removendo capítulos da lista capitulos.

// Não se esqueça de fazer o commit do resultado no seu sistema de controle de versão após realizar as alterações.
