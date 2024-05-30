function dividirEmGrupos(array, tamanhoDoGrupo) {
    for (let i = 0; i < array.length; i += tamanhoDoGrupo) {
        const grupo = array.slice(i, i + tamanhoDoGrupo);
        console.log(`Grupo ${Math.floor(i / tamanhoDoGrupo) + 1}: ${grupo.join(', ')}.`);
    }
}

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;
dividirEmGrupos(nomes, tamanhoDoGrupo);

//Essa função dividirEmGrupos recebe um array de nomes e um número inteiro representando o tamanho 
//de cada grupo. Em seguida, ela itera pelo array e usa o método slice para pegar grupos de tamanho 
//tamanhoDoGrupo, imprimindo cada grupo com o número correspondente. 
//Se houverem nomes restantes, o último grupo terá apenas o restante dos nomes.