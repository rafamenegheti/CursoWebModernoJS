const produtos = [
    { nome: 'Notbook', preco: 2499, fragil: true },
    { nome: 'IPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 5.90, fragil: false }
]

console.log(produtos.filter(function(p){
    return (p.fragil == true && p.preco > 500)
}))

//console.log(produtos.filter(i => i.preco > 2500))


const fragil = produto => produto.fragil == true
const caro = produto => produto.preco > 500

console.log(produtos.filter(caro).filter(fragil))  //encadando filters