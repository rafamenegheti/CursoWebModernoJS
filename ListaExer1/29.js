const contar = (vetor) => {
    qtdeNumeros = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qtdeNumeros ++
        }
    }
    console.log(`${qtdeNumeros} estao no intervalos e ${vetor.length - qtdeNumeros} nao estao no intervalo`)
}

contar([8, 4, 10, 15, 16, 2])