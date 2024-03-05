// const pessoa = {
//     nome: "Bruno",
//     idade: 68,
// }

// if (pessoa.idade <= 21) {
//     console.log(`Sou umas pessoa jovem`);
// } else if (pessoa.idade >= 21, pessoa.idade <= 65) {
//     console.log(`Sou uma pessoa adulta`);
// } else {
//     console.log(`Sou uma pessoa idosa`);
// } esta é outra maneira mais simples sem function

function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";
    } else if (idade < 66) {
        return "adulto(a)"
    } else {
        return "idoso(a)";
    }
}

//const valorRetornadoPelaFuncao = determinarFaixaEtaria(60);// nao preciso retornar e guardar na funcao
//console.log(valorRetornadoPelaFuncao);
console.log(determinarFaixaEtaria(40));