//structuredClone.indexOf(searchValue[fromIndex])

// metodo que busca em que posicao esta um determinado texto dentro de outros textos. ou em qual indice esta a letra ou numero

// saber se um e-mail é valido
// tem que ter um @ 
// tem que ter pelo menos um ponto depois do @

const possivelEmail = "bruno@dev.com";

const indexArroba = possivelEmail.indexOf("@"); // 5

const indexPontoAposArroba = possivelEmail.indexOf(".", indexArroba); // foi colocado o index depois do ponto para que tenha ponto depois do arroba

if (indexPontoAposArroba > indexArroba) { // para ver se é uim email valido
    console.log("Email atende as requisicoes");
} else {
    console.log("Nao ha nenhum ponto apos o arroba.")

}