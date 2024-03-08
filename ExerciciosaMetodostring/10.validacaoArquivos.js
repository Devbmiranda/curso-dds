function validarArquivo(nomeArquivo) {
    // Extrair a extensão do arquivo
    const extensao = nomeArquivo.slice((nomeArquivo.lastIndexOf(".") - 1 >>> 0) + 2);

    // Lista de extensões permitidas
    const extensoesPermitidas = ['jpg', 'jpeg', 'gif', 'png'];

    // Verificar se a extensão está na lista de permitidas
    if (extensoesPermitidas.includes(extensao.toLowerCase())) {
        console.log('Arquivo válido');
    } else {
        console.log('Arquivo inválido');
    }
}

// Exemplos de uso:
const arquivo1 = 'Foto da Familia.pdf';
validarArquivo(arquivo1);

const arquivo2 = 'Foto da Familia.png';
validarArquivo(arquivo2);

const arquivo3 = 'Documento.txt';  // Exemplo com extensão não permitida
validarArquivo(arquivo3);

//Neste código, a função validarArquivo extrai a extensão do arquivo 
//e verifica se ela está na lista de extensões permitidas. 
//Os exemplos de uso demonstram a validação bem-sucedida para um 
//rquivo válido e uma extensão não permitida. O console.log() imprime o 
//esultado final.