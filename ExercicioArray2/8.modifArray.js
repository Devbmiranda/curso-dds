const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

function formatarFrutas(array) {
    const novoArray = array.map((fruta, indice) => {
        // Transforma a primeira letra em maiúscula e as demais em minúscula
        const frutaFormatada = fruta.charAt(0).toUpperCase() + fruta.slice(1).toLowerCase();
        return `${indice} - ${frutaFormatada}`;
    });
    return novoArray;
}

const frutasFormatadas = formatarFrutas(frutas);
console.log(frutasFormatadas);
