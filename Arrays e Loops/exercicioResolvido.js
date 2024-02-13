const nomePais = ['brasil', 'mexico', 'espanha', 'alemanha', 'italia'];
console.log(nomePais);

nomePais.push('holanda'); // incluir no fim da lista
console.log(nomePais);

nomePais.pop(); // remover do fim da lista
console.log(nomePais);

nomePais.unshift('belgica'); // incluir no inicio da lista
console.log(nomePais);

nomePais.shift(); // excluir no inicio da lista
console.log(nomePais);

const ultimo = nomePais[nomePais.length - 1]
console.log(ultimo); // imprimir o ultimo nome

console.log(nomePais[1]);  // imprimir o segundo pais
console.log(nomePais[2]);// imprimir o pais do indice 2


