Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }

    return newArray
}


const produtos = [
    { nome: 'Notbook', preco: 2499, fragil: true },
    { nome: 'IPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true }, 
    { nome: 'Copo de plástico', preco: 5.90, fragil: false }
]


const fragil = produto => produto.fragil == true
const caro = produto => produto.preco > 500


console.log(produtos.filter2(caro).filter2(fragil))
