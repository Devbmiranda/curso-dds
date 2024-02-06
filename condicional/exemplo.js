const temIngresso = true;
const censura = 16;
const idade = 17;

if (temIngresso === true) {
    if (idade >= 18) {
        console.log("Pode entrar");
    } else if (idade < censura) {
        console.log("Nao pode entrar, idade abaixo da censura");
    } else {
        console.log("So pode entrar acompanhado pelos pais")
    }

} else {
    console.log("barrada, por falta de ingresso")
}