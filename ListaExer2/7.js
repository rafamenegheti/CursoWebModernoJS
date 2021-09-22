function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if(inclusivo){
        minimo--
        maximo++
    }
    if(numero > minimo && numero < maximo){
        return true
    }else{
        return false
    }
}

console.log(estaEntre(5, 6, 11, true))