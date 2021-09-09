function rand([min = 100, max = 1000] ){
    if (min > max) [min, max] = [max, min]  //Invertendo os valores dentro do array
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(992)
console.log(rand([, 512]))
console.log(rand([]))
