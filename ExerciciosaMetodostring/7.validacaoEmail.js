function validarEmail(email) {
    // Verificar se o e-mail possui @
    if (!email.includes('@')) {
        console.log('E-mail inválido');
        return;
    }

    // Verificar se o e-mail possui pelo menos um ponto após @
    const partes = email.split('@');
    if (partes.length !== 2 || partes[1].indexOf('.') === -1) {
        console.log('E-mail inválido');
        return;
    }

    // Verificar se o e-mail não começa com ponto
    if (email.startsWith('.')) {
        console.log('E-mail inválido');
        return;
    }

    // Verificar se o e-mail não termina com ponto
    if (email.endsWith('.')) {
        console.log('E-mail inválido');
        return;
    }

    console.log('E-mail válido');
}

// Exemplos de uso:
validarEmail('jose@cubos.academy');
validarEmail('jose@cubos.academy.br');
validarEmail('jose.messias@cubos.academy');
validarEmail('jose.messias@cubos.io');
validarEmail('jose@cubos');
validarEmail('jose.messias@cubos');
validarEmail('jose.messias@.');
validarEmail('jose.@cubos');
validarEmail('.@');
validarEmail('@.');
validarEmail('jose.messias@cubos.');
validarEmail('.messias@cubos.');
validarEmail('.messias@cubos');


//Neste código, a função validarEmail realiza verificações com base 
//nas dicas fornecidas para determinar se um e-mail é válido ou inválido. 
//Os exemplos de uso demonstram os resultados esperados para diferentes casos. 
//O console.log() imprime se o e-mail é válido ou inválido.