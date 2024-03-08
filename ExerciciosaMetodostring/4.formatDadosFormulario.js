let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

// Formatar identificador
const identificadorFormatado = identificador.padStart(6, '0');
console.log(identificadorFormatado);

// Formatar nome
const nomeFormatado = nome.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
console.log(nomeFormatado);

// Formatar email
const emailFormatado = email.trim();
console.log(emailFormatado);

//Neste código:

//O identificador é formatado usando padStart(6, '0') para garantir que 
//tenha sempre seis dígitos, completando com zeros à esquerda conforme 
//necessário.
//O nome é formatado para começar com letras maiúsculas usando 
//toLowerCase() e replace(/\b\w/g, (c) => c.toUpperCase()).
//O email é formatado removendo espaços em branco usando trim().
//Você pode testar com outros exemplos conforme necessário. 
//Cada console.log() imprime uma propriedade do objeto formatado.