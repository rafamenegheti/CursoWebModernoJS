const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(5,2,soma)
imprimirResultado(5,2)
imprimirResultado(5,2, function(x, y){return x - y})   //criando function anonima dentro da chamada da função
imprimirResultado(5,2, (x, y) => x * y)  //arrowFunction anonima



const pessoa = {
    nome: 'Joaquin',
    falar: function(fala) {return console.log(`Meu nome é ${this.nome} e ${fala}`)}  //functio Anonima dentro de objeto

}

pessoa.falar = pessoa.falar.bind(pessoa)

pessoa.falar("E eu Gosto de pamonha")

