function gerarNickname(nome) {
    // Remover espaços em branco e converter para minúsculas
    const nomeSemEspacos = nome.replace(/\s/g, '').toLowerCase();

    // Limitar o comprimento do nickname a 13 caracteres
    const nickname = `@${nomeSemEspacos.slice(0, 13)}`;

    console.log(nickname);
}

// Exemplo de uso:
const nome = 'Guido Cerqueira';
gerarNickname(nome);

// Outros exemplos:
gerarNickname('John Doe');
gerarNickname('Alice Wonderland');

//Neste código, a função gerarNickname remove os espaços em branco, 
//converte o nome para minúsculas e limita o comprimento do nickname a 
//13 caracteres, começando sempre com "@" como exigido. 
//Os exemplos de uso demonstram a criação bem-sucedida de nicknames. 
//O console.log() imprime o resultado final.