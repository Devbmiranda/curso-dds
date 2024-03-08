// Função para formatar CPF
function formatarCPF(cpf) {
    // Remover caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Verificar se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
        console.log('CPF Inválido');
        return;
    }

    // Formatar o CPF
    const cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    console.log(cpfFormatado);
}

// Exemplos de uso para CPF
const cpf1 = "12309";
formatarCPF(cpf1);

const cpf2 = "12345678900";
formatarCPF(cpf2);

// Função para formatar CNPJ
function formatarCNPJ(cnpj) {
    // Remover caracteres não numéricos
    cnpj = cnpj.replace(/\D/g, '');

    // Verificar se o CNPJ possui 14 dígitos
    if (cnpj.length !== 14) {
        console.log('CNPJ Inválido');
        return;
    }

    // Formatar o CNPJ
    const cnpjFormatado = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    console.log(cnpjFormatado);
}

// Exemplos de uso para CNPJ
const cnpj1 = "12345678900";
formatarCNPJ(cnpj1);

const cnpj2 = "12345678000199";
formatarCNPJ(cnpj2);

//Este código inclui duas funções, formatarCPF e formatarCNPJ, que 
//realizam a formatação conforme as regras especificadas. 
//Além disso, há a validação do tamanho para garantir que os números 
//de CPF e CNPJ tenham o comprimento adequado. Os exemplos fornecidos 
//demonstram a formatação correta e a detecção de inválidos com base 
//no tamanho.