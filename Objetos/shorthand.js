const carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano: 2020,
    potencia: 80
};
const moto = {
    marca: "Honda",
    modelo: "CG",
    potencia: 125
};

const pessoa = {
    nome: "Jose",
    idade: 30,
    altura: 1.83,
    peso: 93,
    temCNH: true,
    apelidos: ["Jr.", "Juninho", "J."],
    carro, //shorhand fica entendido que é : carro, mas tem que ter a variavel declarada.
    moto
};

console.log(pessoa.carro.marca);
console.log(pessoa.moto);