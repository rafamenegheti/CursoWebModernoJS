
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)  //O forEach passa como primeiro parametro o valor e como segundo o indice(doa array)

fabricantes.forEach(function(nome){ return console.log(nome)}) //Criando a função anonima dentro do forEach

fabricantes.forEach((nome, indice) => console.log(`${indice + 1}. ${nome}`)) //Criando a arrowFunction anonima dentro do forEach










/*

imprimirIsso = function(numeroDoArray, nomeDoArray) {
    return nomeDoArray[numeroDoArray]
}



novoEach = function(nomeDoArray) {
    for(let i = 0; i < nomeDoArray.length; i++){
        console.log(i + 1, imprimirIsso(i, nomeDoArray))
    }
}

novoEach(fabricantes)



teste = ["gtr", "miy", ",fsdfki", 389393]

novoEach(teste)

*/