const filaAtendimento = {
    pacientes: ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'],

    agendarPaciente: function (paciente) {
        this.pacientes.push(paciente);
        console.log(this.pacientes.join(', '));
    },

    atenderPaciente: function () {
        const pacienteAtendido = this.pacientes.shift();
        console.log(`Paciente atendido: ${pacienteAtendido}`);
        console.log(this.pacientes.join(', '));
    },

    cancelarAtendimento: function (paciente) {
        const index = this.pacientes.indexOf(paciente);
        if (index !== -1) {
            this.pacientes.splice(index, 1);
        }
        console.log(this.pacientes.join(', '));
    }
};

// Testes
console.log("Pacientes na fila inicialmente:");
console.log(filaAtendimento.pacientes.join(', '));

console.log("\nAgendar novo paciente:");
filaAtendimento.agendarPaciente('Fernanda');

console.log("\nAtender próximo paciente:");
filaAtendimento.atenderPaciente();

console.log("\nCancelar atendimento de Ana:");
filaAtendimento.cancelarAtendimento('Ana');

//Nesta estrutura, filaAtendimento é um objeto que contém a lista de 
//pacientes e três métodos: agendarPaciente, atenderPaciente e cancelarAtendimento, 
//que executam as operações de acordo com as regras especificadas. Cada função 
//imprime a lista atualizada após realizar a operação.