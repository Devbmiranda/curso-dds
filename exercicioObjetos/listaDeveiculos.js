// Criando a lista de objetos carros
const carros = [
    {
        marca: "Volkswagen",
        modelo: "Gol",
        ano: 2022,
        cor: "vermelho",
        quantidade_portas: 4,
        automatico: false
    },
    {
        marca: "Ford",
        modelo: "Focus",
        ano: 2021,
        cor: "azul",
        quantidade_portas: 5,
        automatico: true
    },
    {
        marca: "Chevrolet",
        modelo: "Onix",
        ano: 2023,
        cor: "preto",
        quantidade_portas: 4,
        automatico: true
    }
];

// Exemplo de teste com outros valores
const outroCarro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "branco",
    quantidade_portas: 4,
    automatico: true
};

// Adicionando o outro carro à lista
carros.push(outroCarro);

// Exibindo a lista de carros no console para teste
console.log("Lista de Carros:", carros);