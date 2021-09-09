function maiorNumero(vetor) {
    let maior 
    let menor 
    for (let i = 0; i < vetor.length; i++) {
        if (maior == undefined || menor == undefined) {
            maior = vetor[i]
            menor = vetor[i]
        }
        if (vetor[i] > maior) {
            maior = vetor[i]
        } else if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }
    console.log(maior, menor)
}



maiorNumero([20, 8, 2, 68, 82])