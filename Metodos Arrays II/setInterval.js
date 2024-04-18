// setInterval(() => {
//     console.log('Olá alunos e alunas!');
// }, 2000)


// const imprimir = () => {
//     console.log('Olá alunos e alunas!');
//     console.log(interval);
//     clearInterval(interval); // esse comando faz o interval imprimir somente uma vez, ele interrompe o looping
// }

// const interval = setInterval(imprimir, 2000);


// clearInterval() // ele interrompe o setInterval



// let numero = 0

// const contador = setInterval(function () {
//     console.log(numero)
//     numero++
// }, 1000) // de 1 em 1 segundo ele acrecenta um numero, ou seja inicia uma contagem


//abaixo um contador invertido
let numero = 10

const contador = setInterval(function () {
    console.log(numero);
    numero--
    if (numero === 0) {
        console.log('Boooommmmmm!');
        clearInterval(contador);
    }
}, 1000);
