// um objeto criado, por padrão aponta para Object.prototype

const ferrari = {
    modelo: 'F40',
    velMax: 324,
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // acessar quem é o prorotype desse objeto 
console.log(ferrari.prototype)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)  //null


function MeuObjeto(){}

console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
console.log()

//O objeto tem somente o atributo __proto__  ,  nao tem o .prototype