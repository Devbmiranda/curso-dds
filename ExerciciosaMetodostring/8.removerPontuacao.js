function removerPontuacao(cpfOuCnpj) {
    // Remover pontuação usando expressão regular
    const numeroFormatado = cpfOuCnpj.replace(/[^\d]/g, '');

    console.log(numeroFormatado);
}

// Exemplo de uso:
const cpf = "011.022.033-44";
removerPontuacao(cpf);

// Outros exemplos:
removerPontuacao("123.456.789-01");
removerPontuacao("12.345.678/0001-90");

//Neste código, a função removerPontuacao utiliza a expressão regular
// [^\d] para encontrar todos os caracteres que não são dígitos e os remove. 
//Os exemplos de uso demonstram a remoção bem-sucedida da pontuação. 
//O console.log() imprime o resultado final.