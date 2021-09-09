const jurosSimples = (inicial, juros, tempo) => {
    return inicial + ((inicial / juros) * tempo)
} 

console.log(jurosSimples(1000, 100, 10))


const jurosComposto = (inicial, juros, tempo) => {
    return inicial * (1 + juros) ** tempo
}


console.log(jurosComposto(1000, 10/100, 2))

