function contarVetor(vetor) {
    let par = 0
    let impar = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    console.log(`par: ${par} impar: ${impar}`)
}

contarVetor([2, 4, 6])