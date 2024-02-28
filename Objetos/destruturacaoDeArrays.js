const array = [1, 2, 3, 4, 5, 6];


// const a = array[0]
// const b = array[1]

const [a, b, ...resto] = array; //...destruturacao deve ser o ultimo elemento

console.log(a, b, resto);