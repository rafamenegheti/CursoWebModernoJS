function mensalidade(mes, valor) {


    return valor * (1 + 0.05) ** mes

}


console.log(mensalidade(2, 1000))

