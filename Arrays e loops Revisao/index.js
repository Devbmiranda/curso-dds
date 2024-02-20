console.log('Hello World!');


const notas = [
    9.4,  //0
    8.5,  //1
    7.5,  //2 
    8.3,  //3
    8.2,  //4
]

console.log(notas[0]);
console.log(notas[notas.length - 1]);

notas[notas.length] = 9.3
console.log(notas, notas.length)
notas[notas.length] = 6.3
console.log(notas, notas.length)


notas.push(9.8)
console.log(notas, notas.length)


const primeiroItem = notas.shift() // remove o primeiro item
console.log('primeiro item removido', primeiroItem)

notas.unshift(10) // add um item no inicio

const ultimoItem = notas.pop() // remove o ultimo item
console.log('ultimo item removido', ultimoItem)

console.log(notas)


// const aluno = ['Silas', 25, 'santo amaro', 1.0, 9.8];
// console.log(aluno)
