// Criando o objeto endereco
const endereco = {
    rua: "Rua Exemplo",
    numero: 123,
    complemento: "Apto 456",
    bairro: "Bairro Teste",
    cep: "12345-678",
    cidade: "Cidade Exemplo",
    estado: "UF",
    pais: "Brasil"
};

// Criando o objeto usuario com a propriedade endereco
const usuario = {
    nome: "João",
    email: "joao@example.com",
    telefone: "(11) 98765-4321",
    data_nascimento: "01/01/1990",
    endereco: endereco
};

// Exemplo de teste com outros valores
const outroEndereco = {
    rua: "Avenida Principal",
    numero: 456,
    complemento: "Casa 789",
    bairro: "Centro",
    cep: "54321-876",
    cidade: "Cidade Nova",
    estado: "UF",
    pais: "Brasil"
};

const outroUsuario = {
    nome: "Maria",
    email: "maria@example.com",
    telefone: "(22) 12345-6789",
    data_nascimento: "15/05/1985",
    endereco: outroEndereco
};

// Exibindo os objetos no console para teste
console.log("Usuário 1:", usuario);
console.log("Usuário 2:", outroUsuario);
