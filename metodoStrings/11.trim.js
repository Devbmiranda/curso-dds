// remove edspaço em brancos tanto no inicio quanto no fim

const email = "        bruno@dev.com   ";
const formatado = email.trim();

console.log(email);
console.log(`_${formatado}_`); // nao precisa colocar underline