// usamos o método filter() para filtrar o array de cidades de acordo com o comprimento 
//dos nomes e depois usar o método join() para formatar o resultado.


const cidades = [
    "Salvador",
    "São Paulo",
    "Brasília",
    "Recife",
    "Rio de Janeiro",
];

// Filtrando cidades com até 8 caracteres
const cidadesComAteOitoCaracteres = cidades.filter(cidade => cidade.length <= 8);

// Formatando o novo array
const resultadoFormatado = cidadesComAteOitoCaracteres.join(', ');

console.log(resultadoFormatado);


// O método filter() é usado para filtrar o array cidades e retornar apenas 
//os nomes que possuem até 8 caracteres. Em seguida, o método join() é usado 
//para juntar os nomes filtrados em uma única string, separando-os por vírgula e espaço.