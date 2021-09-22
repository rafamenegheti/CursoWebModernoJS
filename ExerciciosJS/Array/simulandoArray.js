const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia'
}


console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function(){
        return Object.values(this) 
    },
    enumerable: false
})  //simplesmente adciona a função ao objeto, isso que é defineProperty, so n da pra ver dentro do objeto pq enumerable ta false

console.log(quaseArray)

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)

console.log(Object.values(quaseArray))
