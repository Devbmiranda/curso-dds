function gerenciarFila(pacientes, operacao, nomePaciente = null) {
    if (operacao === 'agendar') {
        pacientes.push(nomePaciente);
    } else if (operacao === 'atender') {
        const pacienteAtendido = pacientes.shift();
        console.log(`Paciente atendido: ${pacienteAtendido}`);
    }

    console.log(pacientes.join(', '));
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

// Teste para agendar um novo paciente
gerenciarFila(pacientes, 'agendar', 'Fernanda');

// Teste para atender o próximo paciente
gerenciarFila(pacientes, 'atender');


//Essa função gerenciarFila recebe a lista de pacientes, o tipo de operação 
//('agendar' ou 'atender') e opcionalmente o nome do paciente, caso a operação seja 'agendar'.

//Se a operação for 'agendar', o nome do paciente é adicionado ao final da lista. Se for 'atender', 
//o primeiro paciente da lista é removido (usando o método shift) e seu nome é impresso.

//Após realizar a operação, a função imprime a lista atualizada de pacientes separada por vírgula.