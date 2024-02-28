const nomeCliente = "Bruno";
const idadeCliente = 41;

const precoCocaCola = 10;
const precoAgua = 6;
const precoCerveja = 10;

const quantidadeCocaCola = 1;
const quantidadeAgua = 2;
const quantidadeCerveja = 10;

const totalCocaCola = quantidadeCocaCola * precoCocaCola;
const totalAgua = quantidadeAgua * precoAgua;
const totalCerveja = quantidadeCerveja * precoCerveja;

const valorTotal = totalCocaCola + totalAgua + totalCerveja;

// Usando template literals para criar a mensagem
const mensagem = `
  Olá, ${nomeCliente}! Obrigado por sua compra.

  Detalhes da compra:
  Coca Cola: ${quantidadeCocaCola} x R$${precoCocaCola} = R$${totalCocaCola}
  Água: ${quantidadeAgua} x R$${precoAgua} = R$${totalAgua}
  Cerveja: ${quantidadeCerveja} x R$${precoCerveja} = R$${totalCerveja}

  Valor total a pagar: R$${valorTotal.toFixed(2)}
`;

// Usando um fluxo de saída para exibir a mensagem (no console neste caso)
console.log(mensagem);
