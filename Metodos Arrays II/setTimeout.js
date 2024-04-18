// const imprimirNome = (nome) => {
//     console.log(nome);
// }
// imprimirNome('Bruno'); este é um metodo padrao


const imprimirBruno = () => {
    console.log('Bruno Miranda');
}

// setTimeout(imprimirBruno, 2000); // 2 segundos é representado por 2000 milesegundos

// setTimeout(() => {
//     console.log('CubosAcademy')
// }, 2000) essa é um outro metodo

setTimeout(function () {
    console.log('Cubos Academy')
}, 2000)

//essas sao maneiras de incliuir funcoes dentro de outras funcoes.