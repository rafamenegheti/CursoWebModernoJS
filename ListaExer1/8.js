let stringPontuacoes = [30, 40, 20, 4, 51, 25, 42, 38, 56, 5]


function avaliar(string){

    let recordes = 0
    let menorPontuacao = string[0]
    let maiorPontuacao = string[0]
    let piorJogo = 1

    for(let i = 1; i < string.length; i++ ){
        if(string[i] > maiorPontuacao){
            recordes++
            maiorPontuacao = string[i]
        }
        else if(string[i] < menorPontuacao){
            piorJogo = i+1
            menorPontuacao = string[i]
        }

    }
    console.log(`maior: ${maiorPontuacao} menor: ${menorPontuacao} pior jogo: ${piorJogo}`)

}

avaliar(stringPontuacoes)
