const temIngresso = true; // Altere para true ou false conforme necessário
const censura = 16;
const idade = 17; // Altere a idade conforme necessário

// Verifica se tem ingresso e se a idade é maior ou igual à censura
if (temIngresso === true && idade >= censura) {
    // Se a idade for igual a 18 ou maior, a entrada é permitida
    if (idade >= 18) {
        console.log("Entrada permitida para maiores de 18 anos.");
    } else if (idade >= 16) {
        console.log("Entrada permitida acompanhado pelos pais (entre 16 e 17 anos).");
    } else {
        console.log("Entrada proibida para menores de 16 anos.");
    }
} else {
    console.log("Entrada proibida. Verifique os requisitos.");
}