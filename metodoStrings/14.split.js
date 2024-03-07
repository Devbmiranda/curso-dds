//Esta aula aborda o método split, que é uma função muito útil para 
//separar uma string em partes e transformá-la em um array. 
//Por exemplo, se você tem um texto com nomes separados por espaços, 
//pode utilizar o split para separar cada nome em um item do array. 
//Isso pode facilitar a manipulação do texto e realizar várias operações, 
//como pegar o primeiro nome de uma pessoa. 
//Além disso, o método split pode ser aplicado em outras situações, 
//ornando-se uma ferramenta muito útil para quem trabalha com programação.

//Método split
//Exemplo: split(" ", "PS3 usar Inicial Pereira")
//Quebra a string onde encontrar o argumento text
//Cria um array com os itens resultantes
//Espaços são removidos
//Função útil para separar um texto em uma array
//Útil para manipular um texto de maneira mais fácil
//Exemplo: separar um nome completo em partes (primeiro nome, sobrenome)
//Outras aplicações possíveis




const nomeCompleto = "Bruno Miranda Pereira";
const array = nomeCompleto.split(" ");
const nomeDoMeio = array[1];

console.log(nomeDoMeio);
// Miranda