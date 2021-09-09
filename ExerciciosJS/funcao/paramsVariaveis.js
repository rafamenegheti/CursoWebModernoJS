function soma() {
    let soma = 0
    for (i in arguments) {  // Percorrenco o vetor, arguments é um array com os argumentos passado na chamada da função
        soma += arguments[i]   // soma = soma + arguments na posição i
    }
    return soma
}


console.log(soma())
console.log(soma(1))
console.log(soma(4.2, 56, 5.5))
console.log(soma(4.2, 56, ' teste'))
