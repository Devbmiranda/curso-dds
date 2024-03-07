// serve opara preencher uma string colocando alguma coisa no inicio.


const ultimo4dig = "2345";

const numCartao = ultimo4dig.padStart(19, "**** ");// colocar os espaço no final dos *
//19 é a quantidade atingida com os 4 ultimos numero do cartao

console.log(numCartao);