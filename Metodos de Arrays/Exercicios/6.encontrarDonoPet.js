function encontrarDonoDoPet(nomePet) {
    for (const usuario of usuarios) {
        if (usuario.pets.includes(nomePet)) {
            console.log(`O dono(a) do(a) ${nomePet} é o(a) ${usuario.nome}.`);
            return; // Encerra a função após encontrar o dono
        }
    }
    console.log(`Que pena ${nomePet}, não encontramos seu dono(a).`);
}

const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
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

// Teste para encontrar o dono do pet "Max"
encontrarDonoDoPet("Max");

// Teste para encontrar o dono do pet "Pingo"
encontrarDonoDoPet("Pingo");

// Teste para encontrar o dono do pet "Rex"
encontrarDonoDoPet("Rex");

//Nesta função encontrarDonoDoPet, percorremos a lista de usuários e para 
//cada usuário verificamos se o pet desejado está presente na lista de 
//pets desse usuário usando o método includes. Se encontrarmos o pet, 
//imprimimos uma mensagem informando o dono, caso contrário, imprimimos uma 
//mensagem informando que o dono não foi encontrado.