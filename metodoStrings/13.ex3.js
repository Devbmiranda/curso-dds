// Faça uma funçao chamada imprimir data que
//tem 3 parametros: dia, mes e ano.

//essa funcao deve imprimir na tela a data passada como 
// argumento no seguinte formato, de modo que ela sempre tenha 10 digitos no total:

//01/01/2021
//18/02/1991

// utilize padStart para garantir que isso aconteça.
// Sempre passe argumentos do tipo number


function imprimirData(dia, mes, ano) {
    // Garantindo que os argumentos sejam do tipo number
    // if (typeof dia !== 'number' || typeof mes !== 'number' || typeof ano !== 'number') {
    //     console.error('Por favor, forneça valores numéricos para dia, mes e ano.');
    //     return;
    // }

    // Convertendo os valores para strings e utilizando padStart para garantir 2 dígitos
    const diaFormatado = String(dia).padStart(2, '0');
    const mesFormatado = String(mes).padStart(2, '0');
    const anoFormatado = String(ano);

    // Imprimindo a data no formato especificado
    console.log(`${diaFormatado}/${mesFormatado}/${anoFormatado}`);
}

// Exemplos de uso:
imprimirData(1, 1, 2021);
imprimirData(18, 2, 1991);
