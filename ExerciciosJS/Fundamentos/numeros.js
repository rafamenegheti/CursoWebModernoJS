const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//Retorna seé inteiro ou nao
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

//Concertando para apenas duas casas apos a virgula
console.log(media.toFixed(2))//

//Apenas duas casas apos a virgula e convertendo para string
console.log((media.toFixed(2)).toString())

//Transormando em valor binario
console.log(media.toString(2))

mediaBinario = media.toString(2)

console.log(typeof mediaBinario)