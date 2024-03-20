function processData(input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0]);
    let maxDistance = 0;

    for (let i = 1; i <= N; i++) {
        const [X1, Y1] = lines[i].split(' ').map(parseFloat);
        for (let j = i + 1; j <= N; j++) {
            const [X2, Y2] = lines[j].split(' ').map(parseFloat);
            const distance = Math.sqrt((X2 - X1) ** 2 + (Y2 - Y1) ** 2);
            if (distance > maxDistance) {
                maxDistance = distance;
            }
        }
    }

    console.log(maxDistance.toFixed(10));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});

//Este código lê as coordenadas dos funcionários, calcula a distância euclidiana entre todos os pares de funcionários e imprime a maior distância encontrada.