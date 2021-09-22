const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Borracha", "preco": 3.45 }'
]


const carrinho2 = carrinho.map(function(i) { let objeto = JSON.parse(i)
    return objeto.preco 
})
console.log(carrinho2)



const paraObjeto = json => JSON.parse(json)
const getPreco = objeto => objeto.preco

const carrinho3 = carrinho.map(paraObjeto).map(getPreco)
console.log(carrinho3)
