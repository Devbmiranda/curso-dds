const temIngresso = true; // Altere para true ou false conforme necessário
const censura = 16;
const idade = 14; // Altere a idade conforme necessário
const estaComOsPais = true;

// tem ingresso E
// tem idade maior ou igual a censura OU esta com os pais

if (temIngresso === true) {
    if (idade >= censura || estaComOsPais === true) {
        console.log("Pode entrar");
    } else {
        console.log("Nao pode entrar");
    }
} else {
    console.log("Barrada, falta de ingresso.")
}