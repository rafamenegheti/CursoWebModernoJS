let valor //nao inicializada

console.log(valor) //Indefinida
//console.log(valor2)  is not defined é diferente de undefined

valor = null
console.log(valor)  //null significa que a variavel nao aponta para nenhum local de memoria

//console.log(valor.toString())  //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(produto.preco)
console.log(produto)


produto.preco = null //Sem preço
console.log(produto.preco)
console.log(produto)
