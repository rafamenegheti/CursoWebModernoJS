function progAri(base, qnt, intervalo){
    console.log(base)
    for(let i = 1; i < qnt; i++){
        base += intervalo
        console.log(base)
    }
}

progAri(2, 5, 2)


function progGeo(base, qnt, intervalo){
    console.log(base)
    for(let i = 1; i < qnt; i++){
        base *= intervalo
        console.log(base)
    }
}

progGeo(2, 5, 5)