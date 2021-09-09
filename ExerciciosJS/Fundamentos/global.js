//em node o global equivale ao window



let a = 43
global.b = 543
teste = "teste"//Quando cria variavel sem definir o tipo, ela vai pro escopo global, nao fazer isso
this.c = 7
this.d = 456
this.e = false
this.f = "teste"


console.log(global.a)
console.log(global.b)
console.log(global.teste)
console.log(this.c)
console.log(module.exports.c)  //dentro de um arquivo This é igual a module.exports
console.log(module.exports === this) 




console.log(module.exports) 



