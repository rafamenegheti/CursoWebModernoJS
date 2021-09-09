let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)  //true
comparaComThis(this)  //false


const  obj = {}


comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj)   //true
comparaComThis(global)  //false
 

let comparaComThisArrow = param => console.log(this === param) //Nesse caso, o this é o modulo node desse arquivo, e nao global

comparaComThisArrow(obj)  //false

comparaComThisArrow(global)  //false

comparaComThisArrow(this)  //true

comparaComThisArrow(module.exports)  //true


comparaComThisArrow = comparaComThisArrow.bind(obj)

comparaComThisArrow(obj) //False   //A arrow function é "mais forte" que o bind, nao consigo mudar o this de uma arrowFunction

comparaComThisArrow(module.exports)  //true
