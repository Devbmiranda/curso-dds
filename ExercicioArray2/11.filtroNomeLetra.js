const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

function filtrarNomesQueComecamComA(array) {
    const nomesFiltrados = array.filter(nome => nome.toLowerCase().startsWith('a'));
    return nomesFiltrados;
}

const nomesComA = filtrarNomesQueComecamComA(nomes);
console.log(nomesComA);
