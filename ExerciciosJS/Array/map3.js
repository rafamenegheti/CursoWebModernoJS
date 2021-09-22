Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Borracha", "preco": 3.45 }'
]


const carrinho2 = carrinho.map2(function (i) {
    let objeto = JSON.parse(i)
    return objeto.preco
})
console.log(carrinho2)



const paraObjeto = json => JSON.parse(json)
const getPreco = objeto => objeto.preco

const carrinho3 = carrinho.map2(paraObjeto).map2(getPreco)
console.log(carrinho3)
