// declaracao tradicional
// function soma(x, y) {
//     // codigo
//     const resultado = x + y;
//     return resultado;
// }
// maneira mais tradicional de escrever uma funçao


// parece com uma delcaracao de uma variavel arrow function

//declaracao com arrow function
const soma = (x, y) => {
    const resultado = x + y;
    return resultado;
}

console.log(soma(5, 2)); // posso chamar esta funcao antes de declarar com arrow function
// com consta nao funciona declarar antes