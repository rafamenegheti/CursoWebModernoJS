function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//funcao pra gerar um numero rondomico nesse intervalo

const obj = { nome: 'junior', max:90, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({}))  // <= assim da bom
//console.log(rand())  // <= assim da ruim

