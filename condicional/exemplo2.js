const temIngresso = true; // Altere para true ou false conforme necessário
const censura = 16;
const idade = 18; // Altere a idade conforme necessário

// Verifica se tem ingresso e se a idade é maior ou igual à censura
if (temIngresso && idade >= censura) {
    // Se a idade for igual a 18 ou maior, a entrada é permitida
    if (idade >= 18) {
        console.log("Entrada permitida");
    } else if (idade >= 16) {
        console.log("Entrada permitida acompanhado pelos pais");
    } else {
        console.log("Entrada proibida");
    }
} else {
    console.log("Entrada proibida");
}