const palavra = 'abracadabraaa'; // 5 letras

let quantidade = 0;

for (let letra of palavra) {
    if (letra === 'a') {
        quantidade++;
    }
}

console.log(quantidade);