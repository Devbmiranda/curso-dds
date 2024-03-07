
// aqui as duas maneiras mais simples e facil, lembrese de escluir a parte a cima
// primeira maneira

//let numero = "1,350,000";

//let primeiraVirgula = numero.replace(",", ".");
// primeiraVirgula = primeiraVirgula.replace(",", ".");

// console.log(numero);
// console.log(primeiraVirgula);

// segunda maneira

// while (numero !== numero.replace(",", ".")) {
//     numero = numero.replace(",", ".");
// }// aqui se utilizou o "while" = enquanto para que enquanto tiver virgula 
//continue procurando e substituindo a virgula.


// console.log(numero);
// console.log(primeiraVirgula);

function replaceAll(original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText);
    }
    return original;
}

let numero = "1,350,000,000,000,000";
console.log(replaceAll(numero, ",", "."));