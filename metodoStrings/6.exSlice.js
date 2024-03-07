// exercicio slice

// quero obter apenas os dois digitos 
//do estado de uma cidade

const cidade = "São Paulo - SP";



// Obtendo os dois dígitos do estado
const penultimoIndex = cidade.length - 2;
let estado = cidade.slice(-2);// os dois ultimos digitos CALCULO O LENGTH
// o ultimo indice é sempre mesnos um e o penultimo é sempre menos 2.

console.log("Os dois dígitos do estado são:", estado);
