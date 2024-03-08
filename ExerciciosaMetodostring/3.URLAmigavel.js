function gerarURLAmigavel(texto) {
    // Converter o texto para minúsculas e substituir espaços por hífens
    const urlAmigavel = texto.toLowerCase().replace(/\s+/g, '-');

    console.log(urlAmigavel);
}

// Exemplo de uso
const texto = "Aprenda programar do zero na Cubos Academy";
gerarURLAmigavel(texto);

//Neste código, a função gerarURLAmigavel converte o texto para minúsculas e,
// em seguida, substitui espaços por hífens usando expressões regulares. 
//O resultado é a URL amigável desejada. 
//O exemplo fornecido gera a saída esperada 
//"aprenda-programar-do-zero-na-cubos-academy". 
//Você pode testar com outros exemplos conforme necessário.