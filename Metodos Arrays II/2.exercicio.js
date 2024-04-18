// function verificarVirus(arquivos) {
//     // Função callback para verificar se um arquivo é um vírus
//     function verificarArquivo(arquivo) {
//         return arquivo.indexOf(".bat") !== -1;
//     }

//     // Verifica se algum arquivo é um vírus
//     const virusDetectado = arquivos.some(verificarArquivo);

//     // Exibe mensagem correspondente
//     if (virusDetectado) {
//         console.log("Vírus detectado");
//     } else {
//         console.log("Nenhum vírus encontrado");
//     }
// }

// // Exemplo de uso:
// const listaArquivos = ["documento.docx", "planilha.xlsx", "script.bat", "foto.jpg"];
// verificarVirus(listaArquivos);

//Nesta função, definimos uma função de callback verificarArquivo que verifica se a extensão ".bat" 
//está presente em um nome de arquivo usando o método indexOf. 
//Em seguida, usamos o método some para verificar se algum dos arquivos passados como argumento é considerado um vírus. 
//Se algum for detectado como vírus, a função imprime "Vírus detectado", 
//caso contrário, imprime "Nenhum vírus encontrado".

const arquivos = [
    'teste.txt',
    'fotos.png',
    'contrato.doc',
    'instalador.exe',
    'nomes.bat'
];

const antivirus = (arrayArquivos) => {
    const resultado = arrayArquivos.some((arquivo) => {
        const existeExtensao = arquivo.indexOf('.bat');          // indexOf é usado para encontrar uma parte de um texto dentro de uma string  
        return existeExtensao !== -1;

    });

    if (resultado) {
        console.log('Virus Detectado');
    } else {
        console.log('Nenhum Virus encontrado');
    }
}

antivirus(arquivos);