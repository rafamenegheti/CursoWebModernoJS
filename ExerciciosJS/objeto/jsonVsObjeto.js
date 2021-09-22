const obj = {a: 1, b:2, c: 3, soma() { return a + b + c} }

//convertendo pra JSON
console.log(JSON.stringify(obj))
const jeison = JSON.stringify(obj)

//convertendo JSON para objeto
console.log(JSON.parse(jeison))

const obj2 = JSON.parse(jeison)
console.log(obj2)

console.log(JSON.parse('{ "a": 2.8, "b": "string", "c": true, "d": {}, "e": [] }'))
