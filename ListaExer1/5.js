function arredondar(numero){
    return numero.toFixed(2).toString().replace('.', ',')
}

console.log(arredondar(0.30000000000000004))