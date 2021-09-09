const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))   //retorna as chaves do objeto
console.log(Object.values(pessoa))   //retorna somente os valores
console.log(Object.entries(pessoa))   //arrya com subArrays 




Object.entries(pessoa).forEach(([e]) => {
    console.log(` primeiro elemento: ${e[0]} segundo elemento:${e[1]}`)

})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(` primeiro elemento: ${chave} segundo elemento:${valor}`)

})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/10/2021'
})


pessoa.dataNascimento = '15/04/2019'
console.log(pessoa.dataNascimento)



// Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c:3, a:4 }
const obj = Object.assign(dest, o1, o2)


