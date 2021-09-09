function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notbook',
    preco: 4869,
    desc: 0.15,
    getPreco
}

//getPreco = getPreco.bind(produto)
//console.log(getPreco())

console.log(produto.getPreco())



//Usando call e apply
const carro = { preco: 49998, desc: 0.20, }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// podemos passar os parametros da função
console.log(getPreco.call(carro, 0.20, '$'))
console.log(getPreco.apply(carro, [0.20, '$']))
