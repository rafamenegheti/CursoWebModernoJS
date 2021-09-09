function caixa(valor) {

    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    valorNota = calculaNota(valor)
    while (valor >= valorNota) {
        switch (valorNota) {
            case 100:
                contador100++
                valor -= 100
                break
            case 50:
                contador50++
                valor -= 50
                break
            case 10:
                contador10++
                valor -= 10
                break
            case 5:
                contador5++
                valor -= 5
                break
            case 1:
                contador1++
                valor -= 1
                break
        }

        valorNota = calculaNota(valor)

    }
console.log(elaboraResultado(contador1, contador5, contador10, contador50, contador100))

}

    



    function calculaNota(valorSaque) {
        if (valorSaque >= 100) {
            return 100
        } else if (valorSaque >= 50) {
            return 50
        } else if (valorSaque >= 10) {
            return 10
        } else if (valorSaque >= 5) {
            return 5
        } else if (valorSaque >= 1) {
            return 1
        }
    }



function elaboraResultado(contador1, contador5, contador10, contador50, contador100){
    return `1: ${contador1}, 5: ${contador5}, 10: ${contador10}, 50:${contador50}, 100: ${contador100}`
}



caixa(100)