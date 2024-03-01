const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

usuarios.forEach(({ nome, pets }) => {
    if (pets.length === 0) {
        console.log(`Sou ${nome} e não tenho pets`);
    } else if (pets.length === 1) {
        console.log(`Sou ${nome} e tenho 1 pet`);
    } else {
        console.log(`Sou ${nome} e tenho ${pets.length} pets`);
    }
});

// Neste código, usei a desestruturação para acessar as propriedades nome e pets de cada objeto da lista de usuários. Em seguida, utilizei a estrutura condicional if para determinar a mensagem com base na quantidade de pets.

//Você pode testar o código com outros exemplos, adicionando ou removendo pessoas da lista usuarios.
