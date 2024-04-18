const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

function encontrarPosicaoLivro(nomeLivro) {
    const posicao = livros.indexOf(nomeLivro);
    if (posicao !== -1) {
        return posicao + 1; // Adicionando 1 porque as posições começam em 1, não em 0 na biblioteca
    } else {
        return "Livro não encontrado na estante.";
    }
}

console.log(`O livro está na posição ${encontrarPosicaoLivro(nomeDoLivro)}`);

//Isso imprimirá a posição do livro na estante, ou uma mensagem de erro se o livro não for encontrado.