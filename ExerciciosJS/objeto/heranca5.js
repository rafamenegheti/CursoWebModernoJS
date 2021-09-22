console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object) //os 3 sao funções, portanto, possuem o atributo .protoype

String.prototype.reverse = function () {
    return this.split('').reverse().join('')

}
//nesse exemplo eu crirei a função reverse para as strings, que nao existe por padrao no js,
// basicamente foi atribuido a essa função ao protorype que retorna this.split, que cria um vetor, colcoando cada letra
//em um incide, o vetor tem por padrao a fução reverse(), entao eu reverti o vetor e depois juntei tudo em String novamente
// utilizando join()

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

// voce acessa o array ou a string dentro de um metodo prototipo a partir do this

console.log([6, 2, 3, 4, 5].first())

//tomar cuidado para n sobreescrever alguma função ja existente no prototype