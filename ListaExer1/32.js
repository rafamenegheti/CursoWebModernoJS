function media(vetor){
    let montante = 0
    let tamanho = 0
    for(i in vetor){
        montante += vetor[i]
        tamanho++
    }
    return montante / vetor.length
}

console.log(media([10, 5]))