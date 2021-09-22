const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)   //cria objeto com o prototype apontando pro 'pai'
filha1.nome = 'Ana'
console.log(filha1.corCabelo)
console.log(filha1) 

const filha2 = Object.create(pai, {
    nome: { value: 'Juana', writable: false, enumerable: true },
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)


console.log(Object.keys(pai))
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}


for(let key in filha2) {
    console.log(key)
}
