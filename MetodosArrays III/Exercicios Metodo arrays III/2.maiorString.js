const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const maiorString = cidades.reduce((maior, atual) => {
    return atual.length > maior.length ? atual : maior;
}, "");

console.log("A maior string é:", maiorString);

// Teste com outros exemplos
const paises = [
    "Argentina",
    "Estados Unidos",
    "China",
    "Reino Unido",
    "França",
];

const maiorPais = paises.reduce((maior, atual) => {
    return atual.length > maior.length ? atual : maior;
}, "");

console.log("A maior string no array 'paises' é:", maiorPais);

const frutas = [
    "Melancia",
    "Abacate",
    "Ameixa",
    "Laranja",
    "Figo",
];

const maiorFruta = frutas.reduce((maior, atual) => {
    return atual.length > maior.length ? atual : maior;
}, "");

console.log("A maior string no array 'frutas' é:", maiorFruta);

//Explicação do Código
//Array de Cidades:

//O array cidades contém várias strings que representam nomes de cidades.
//Utilização do reduce():

//O método reduce() é usado para iterar sobre cada elemento do array e comparar o comprimento de cada string.
//A função de callback passada para reduce() recebe dois parâmetros: maior (o maior comprimento encontrado até agora) e atual (o comprimento do elemento atual).
//A comparação atual.length > maior.length ? atual : maior verifica se a string atual é maior que a maior string encontrada até agora. Se for, atual se torna a nova maior string; caso contrário, maior permanece a maior string.
//Resultado:

//O resultado final é a string de maior comprimento do array cidades, que é então impressa no console.
//Testes com Outros Exemplos:

//Arrays paises e frutas são usados para testar a mesma lógica com diferentes conjuntos de strings, demonstrando que a lógica aplicada é consistente e funciona para qualquer array de strings.