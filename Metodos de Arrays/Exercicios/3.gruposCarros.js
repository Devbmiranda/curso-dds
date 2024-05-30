function encontrarCarrosSubsequentes(array, posicao) {
    const carrosSubsequentes = array.slice(posicao, posicao + 3);
    console.log(carrosSubsequentes.join(' - '));
}

const carros = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;
encontrarCarrosSubsequentes(carros, posicao);

//Essa função encontrarCarrosSubsequentes recebe um array de carros e uma posição. 
//Em seguida, ela utiliza o método slice para capturar 3 carros subsequentes começando da posição informada. 
//Por fim, imprime os carros encontrados separados por -.