Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let conteudo = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++){
        conteudo = callback(conteudo, this[i], i, this)
    }
    return conteudo
}

const soma = (total, valor) => total + valor

const nums = [1, 2, 3, 4, 5, 6]

console.log(nums.reduce2(soma))