const numeroCartao = '1111222233334444';

// Formatar número do cartão
const cartaoFormatado = numeroCartao.slice(0, 4) + '********' + numeroCartao.slice(-4);
console.log(cartaoFormatado);

//Neste código, utilizamos o método slice para pegar os primeiros 4 dígitos 
//do número do cartão (numeroCartao.slice(0, 4)) e os últimos 4 dígitos 
//(numeroCartao.slice(-4)). O restante dos dígitos é substituído por 
//asteriscos. O resultado é a formatação desejada. Você pode testar com 
//outros exemplos conforme necessário. O console.log() imprime o número do 
//cartão formatado.