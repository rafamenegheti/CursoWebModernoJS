const getRandomNumber = function (min, max) {
    randomNumber = Math.random() * (max - min) + min
    return Math.floor(randomNumber)
}


let opcao 

do {
    opcao = getRandomNumber(10, 20)
    console.log(`Opção escolhida foi ${opcao}.`)
}
while (opcao != 15)

console.log('Fim!')

// O do/while retorna pelo menos uma vez pq o while esta somente depois