// transforme "bruno miranda pereira"
// em Bruno Miranda Pereira


// maaneira mais senior
// function capitalizarPalavras(frase) {
//     // Divida a frase em palavras usando split
//     const palavras = frase.split(' ');

//     // Capitalize a primeira letra de cada palavra
//     const palavrasCapitalizadas = palavras.map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1));

//     // Junte as palavras capitalizadas de volta em uma frase
//     const fraseCapitalizada = palavrasCapitalizadas.join(' ');

//     return fraseCapitalizada;
// }

// // Exemplo de uso:
// const nomeFormatado = capitalizarPalavras("bruno miranda pereira");
// console.log(nomeFormatado);


const nome = "bruno miranda e pereira";
const arrayDeNomes = nome.split(" ");

let nomeFormatado = "";
for (let item of arrayDeNomes) {
    let primeiraLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);
    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + " ";
}

// Remover espaços em branco extras no final da string
nomeFormatado = nomeFormatado.trim();

console.log(nomeFormatado);

//adicionar um trim no final para remover qualquer espaço em branco 
//extra no final da string formatada, mas isso depende da necessidade 
//específica do seu caso.
