function teste1(num) {
    if (num > 7)
        console.log(num)
        console.log('Final')
}


// O {} é opcional no IF, mas caso nao tenha, ele so vai levar em conta uma sentença, entao nesse caso ele leva
// em conta o primeiro console.log, porem o segundo nao
// Logo o segundo console.log sempre sera executado pois esta fora da estrutura if

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {
        console.log(num)
    }
}

// o ponto e virgula ; termina a sentença do if, logo fica um sentenla vazia que nao faz nada
// portanto nao se deve usar ; nas estruturas de controle

teste2(6)
teste2(8)
