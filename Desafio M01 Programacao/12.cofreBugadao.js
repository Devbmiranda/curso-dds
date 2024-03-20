function processData(input) {
    const inputLines = input.trim().split('\n');
    const correctPassword = inputLines[0];
    const enteredPassword = inputLines[1];

    let correctIndex = 0;
    let opened = false;

    for (let i = 0; i < enteredPassword.length; i++) {
        if (enteredPassword[i] === correctPassword[correctIndex]) {
            correctIndex++;
        }
        if (correctIndex === correctPassword.length) {
            opened = true;
            break;
        }
    }

    if (opened) {
        console.log("SIM");
    } else {
        console.log("NAO");
    }
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


//Este código lê a senha correta e a senha digitada. 
//Em seguida, ele compara as letras digitadas com as letras da senha 
//correta, avançando na sequência da senha correta conforme as letras 
//corretas são digitadas. 
//Se todas as letras da senha correta forem digitadas na ordem correta, o cofre abre. 
//Caso contrário, o cofre não abre.