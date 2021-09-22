function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)
//quando voce cria um objeto a partir de uma função construtora usando o new o prototipo desse objeto automaticamente aponta para
//a função que voce criou .prototype

MeuObjeto.prototype.nome = 'Anonimo'  //qualquer objeto criado a partir dessa função vao ter acesso a esse atributo
MeuObjeto.prototype.falar = function(){
    console.log('Oi, meu nome é ' + this.nome)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype  //esse obj foi criado com a notação literal, poranto o __proto__ dele
// na verdade é =  a Object.prototype, entao é necessario atribuir manualmente
obj3.falar()


// Resumindo a loucura

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)  //true
console.log(MeuObjeto.__proto__ === Function.prototype)   //true
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)  //null