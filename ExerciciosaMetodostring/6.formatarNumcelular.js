function formatarNumeroCelular(celular) {
    const celularString = celular.toString();

    if (celularString.length === 10) {
        // Adicionar DDD e formatar
        const ddd = celularString.slice(0, 2);
        const parte1 = celularString.slice(2, 6);
        const parte2 = celularString.slice(6);
        console.log(`(${ddd}) 9 ${parte1}-${parte2}`);
    } else if (celularString.length === 8) {
        // Adicionar apenas o "9" e formatar
        const parte1 = celularString.slice(0, 4);
        const parte2 = celularString.slice(4);
        console.log(`9 ${parte1}-${parte2}`);
    } else {
        console.log('Número de celular inválido.');
    }
}

// Exemplos de uso:
const celular1 = 7199918888;
formatarNumeroCelular(celular1);

const celular2 = 99918888;
formatarNumeroCelular(celular2);

const celular3 = 123456789; // Inválido
formatarNumeroCelular(celular3);

// Neste código, a função formatarNumeroCelular verifica o comprimento do 
//número de celular e adiciona o DDD e o "9" conforme necessário. 
//Os exemplos de uso demonstram a formatação correta para diferentes 
//situações. O console.log() imprime o número de celular formatado.