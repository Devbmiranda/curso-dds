// função que localize um endereço pelo CEP usando o método find(). 

const enderecos = [
    { cep: "00111222", rua: "Rua dos Artistas" },
    { cep: "00111333", rua: "Rua Augusta" },
    { cep: "00222444", rua: "Avenida Paralela" },
    { cep: "11222333", rua: "Rua Carlos Gomes" },
];

function encontrarEnderecoPorCEP(cep) {
    const endereco = enderecos.find(endereco => endereco.cep === cep);

    if (endereco) {
        console.log(endereco.rua);
    } else {
        console.log("Endereço não encontrado para o CEP informado.");
    }
}

// Exemplo de uso
encontrarEnderecoPorCEP("00222444");




//A função encontrarEnderecoPorCEP recebe um CEP como argumento.
//O método find() é usado para procurar um objeto de endereço no array enderecos cujo cep corresponda ao CEP fornecido.
//Se o endereço for encontrado, o nome da rua é impresso. Caso contrário, é impressa uma mensagem indicando que o endereço não foi encontrado.
//No exemplo fornecido, o CEP 00222444 corresponde à "Avenida Paralela", então o resultado impresso será "Avenida Paralela".

