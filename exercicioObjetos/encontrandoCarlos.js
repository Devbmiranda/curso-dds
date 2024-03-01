const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
];

const posicaoCarlos = participantes.findIndex(participante => participante.nome === "Carlos");

if (posicaoCarlos !== -1) {
    console.log(`Galera... O Carlos está na posição ${posicaoCarlos + 1}, corre lá!`);
} else {
    console.log("Ops! O Carlos não está na festa.");
}
