const pessoa = {
    nome: "Jose",
    idade: 30,
    altura: 1.83,
    peso: 93,
    temCNH: true,
    apelidos: ["Jr.", "Juninho", "J."]
}

let textoCNH = (pessoa.temCNH ? "possui CNH" : "nao possui CNH");

// if (pessoa.temCNH) { // poderia ser assim if (pessoa.temCNH === true mas vamos melhorar
//     textoCNH = "Possui CNH";
// } else {
//     textoCNH = "Não possui CNH";
// }


console.log(`${pessoa.nome}, tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH}, e tem os seguintes apelidos:`)
for (let apelidos of pessoa.apelidos) {
    console.log(`- ${apelidos}`);
}