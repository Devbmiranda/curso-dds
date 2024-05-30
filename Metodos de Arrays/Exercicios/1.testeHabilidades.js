const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

// Parte A
const stringInvertida = frutas.reverse().join(', ');
console.log(stringInvertida);

// Parte B
frutas.pop(); // Remove o último elemento (Uva)
frutas.shift(); // Remove o primeiro elemento (Banana)
frutas.push('Melão'); // Adiciona Melão ao final do array
console.log(frutas);

//Este código faz exatamente o que você pediu. 
//Na parte A, ele reverte a ordem do array frutas e depois 
//junta todos os elementos em uma única string separada por vírgulas. 
//Na parte B, ele remove o primeiro e último elementos do array 
//original e adiciona 'Melão' ao final.