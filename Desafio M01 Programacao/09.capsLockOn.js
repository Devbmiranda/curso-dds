function corrigirPalavra(palavra) {
    if (palavra === palavra.toUpperCase()) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    } else if (palavra === palavra.charAt(0).toLowerCase() + palavra.slice(1).toLowerCase()) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    } else {
        return palavra.toLowerCase();
    }
}

// Texto a ser corrigido
const textoOriginal = `vOCÊ ESTÁ DESENVOLVENDO UM FORMULÁRIO DE CADASTRO E NOS PRIMEIROS TESTES DE USABILIDADE COM USUÁRIOS REAIS NOTOU ALGO PECULIAR: mUITOS USUÁRIOS PREENCHEM O FORMULÁRIO TODO COM A TECLA cAPS lOCK ATIVA, DEIXANDO TUDO BEM MENOS AGRADÁVEL DE LER. a SOLUÇÃO ESCOLHIDA NO dAILY DO DIA SEGUINTE FOI DE DETECTAR QUANDO O USUÁRIO ESTÁ ESCREVENDO DESSA FORMA E CORRIGIR AUTOMATICAMENTE. vOCÊ DEVE AGORA ESCREVER ESSE ALGORITMO.

cONSIDERAMOS QUE UMA PALAVRA FOI ESCRITA COM cAPS lOCK SE OU TODAS AS SUAS LETRAS FOREM MAIÚSCULAS OU SE A PRIMEIRA FOR MINÚSCULA E TODAS AS OUTRAS MAIÚSCULAS. a CORREÇÃO NESSES CASOS É INVERTER TODAS AS LETRAS.`;

// Função para corrigir o texto
function corrigirTexto(texto) {
    const palavras = texto.split(' ');
    const palavrasCorrigidas = palavras.map(palavra => corrigirPalavra(palavra));
    return palavrasCorrigidas.join(' ');
}

// Corrigindo e imprimindo o texto corrigido
console.log(corrigirTexto(textoOriginal));
