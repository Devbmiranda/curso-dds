// const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

// function verificarLimiteCaracteres(palavras) {
//     for (let i = 0; i < palavras.length; i++) {
//         if (palavras[i].length > 5) {
//             return "existe palavra inválida";
//         }
//     }
//     return "array validado";
// }

// console.log(verificarLimiteCaracteres(palavras));

//Isso verificará se existe alguma palavra no array com mais de 5 caracteres e imprimirá o resultado correspondente.
// i++ é uma expressão em JavaScript que significa "incrementar o valor de i por 1". É uma forma curta de escrever i = i + 1.


const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const verificarLimiteCaracteres = function (palavras) {
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].length > 5) {
            return "existe palavra inválida";
        }
    }
    return "array validado";
};

const resultado = verificarLimiteCaracteres(palavras);
console.log(resultado);
