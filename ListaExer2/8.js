function calculadoraLoca(n1, n2){
    let result = 0
    for(let i = 0; i < n2; i++){
        result = result + n1
    }
    return result
}

console.log(calculadoraLoca(0,0))