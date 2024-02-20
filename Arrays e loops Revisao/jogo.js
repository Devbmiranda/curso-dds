// // sorteio no js
// const sorteio = Math.floor(Math.random() * 10) + 1


// console.log(sorteio)

// espada 10
// adaga 5
// machado 15
// lanca 25
// clava 20

const inimigos = [
    'adaga',
    'espada',
    'machado',
    'clava',
    'lanca',
]

// // inicializacao de um valor
// let indice = 0
// // regra de execucao
// while (indice < inimigos.length) {
//     console.log(indice + 1, inimigos[indice], (indice + 1) * 5)
//     // indice = indice + 1
//     // indice += 1
//     indice++ // incrementacao do indice
// }


for (let i = 0; i < inimigos.length; i++) {
    console.log(i + 1, inimigos[i], (i + 1) * 5)
}


const nomeHeroi = 'Javascripto'
const vidaHeroi = 30
const poderHeroi = 5
const acoes = ['atacar', 'errar', 'fugir', 'curar']

console.log('======================')

const inimigo = inimigos[3]
const vidaInimigo = 30

let poderInimigo
for (let i = 0; i < inimigos.length; i++) {
    if (inimigo === inimigo[i]) {
        poderInimigo = (i + 1) * 5
        break
    }
}

console.log('inimigo encontrado', inimigo, 'poder', poderInimigo)


const acao = acoes[2]
switch (acao) {
    case 'atacar';
        vidaInimigo -= poderHeroiconsole
        breack;
    case 'errar';
        breack;
    case 'curar';
        breack;
    case ''
}