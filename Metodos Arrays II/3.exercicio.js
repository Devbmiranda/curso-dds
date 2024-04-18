const carros = [
    { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'preta' },
    { nome: 'civic', marca: 'honda', ano: '2023', cor: 'grafite' },
    { nome: 'ranger', marca: 'ford', ano: '2022', cor: 'branca' },
    { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'prata' }
];

const buscarCarro = (marca, arrayCarros) => {
    const resultados = arrayCarros.find((carro) => {
        return carro.marca === marca;
    });
    console.log(resultados);

};

buscarCarro('toyota', carros);


// abaixo minha resolucao para percorrer todas as linhas e encontrar todas as informaçoes
// const carros = [
//     { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'preta' },
//     { nome: 'civic', marca: 'honda', ano: '2023', cor: 'grafite' },
//     { nome: 'ranger', marca: 'ford', ano: '2022', cor: 'branca' },
//     { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'prata' }
// ];

// const buscarCarro = (marca, arrayCarros) => {
//     return arrayCarros.filter((carro) => {
//         return carro.marca === marca;
//     });
// };

// const resultados = buscarCarro('toyota', carros);

// resultados.forEach((carro) => {
//     console.log(carro);
// });


