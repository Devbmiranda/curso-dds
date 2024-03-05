function corrigirProva(prova) {
    // Inicializando variáveis para contagem de acertos e nota
    let acertos = 0;
    let nota = 0;

    // Iterando sobre as questões da prova
    for (let i = 0; i < prova.questoes.length; i++) {
        // Verificando se a resposta do aluno é igual à resposta correta
        if (prova.questoes[i].resposta === prova.questoes[i].correta) {
            acertos++;
        }
    }

    // Calculando a nota (cada questão vale 2 pontos)
    nota = acertos * 2;

    // Imprimindo o resultado
    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}`);
}

// Exemplo de uso com o objeto prova fornecido
const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        { resposta: "a", correta: "b" },
        { resposta: "c", correta: "c" },
        { resposta: "e", correta: "b" },
        { resposta: "b", correta: "b" },
        { resposta: "c", correta: "c" }
    ]
};

corrigirProva(prova);