const nums = [1, 2, 3, 4, 5]

let nums2 = nums.map(l => l * 2)

console.log(nums2)

const soma10 = numero => numero + 10
const triplo = numero => numero * 3
const paraDinheiro = numero => `R$${parseFloat(numero).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)

