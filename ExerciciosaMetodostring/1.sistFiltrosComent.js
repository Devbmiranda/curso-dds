function verificarComentario(comentario) {
    // Converter o comentário para minúsculas para facilitar a comparação
    const comentarioMinusculo = comentario.toLowerCase();

    // Verificar se o comentário contém as palavras proibidas
    if (comentarioMinusculo.includes('pandemia') || comentarioMinusculo.includes('covid')) {
        console.log('Comentário bloqueado por conter palavras proibidas');
    } else {
        console.log('Comentário autorizado');
    }
}

// Exemplo de uso:
const comentario1 = "Esse COVID é muito perigoso!";
verificarComentario(comentario1);

const comentario2 = "Estou gostando do clima, sem pandemia!";
verificarComentario(comentario2);

const comentario3 = "Comentário sem palavras proibidas.";
verificarComentario(comentario3);

//Este código cria uma função verificarComentario que aceita um 
//comentário como argumento. O comentário é convertido para minúsculas 
//para garantir que as palavras proibidas sejam detectadas 
//independentemente de sua capitalização. Em seguida, verifica se o 
//comentário contém as palavras proibidas "pandemia" ou "covid" e 
//imprime a mensagem apropriada.
