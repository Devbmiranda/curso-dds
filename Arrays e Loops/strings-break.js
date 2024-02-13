const palavra = `alemanha`;

let encontrado = false;
for (let letraH of palavra) {
    if (letraH === 'h') {
        console.log(`Tem a letra h`);
        encontrado = true;
        break;
    }
}

if (!encontrado) { // !oposto de encontrado
    console.log(`Nao tem a letra h`);
}
