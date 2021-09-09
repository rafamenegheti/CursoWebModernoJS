// coleção dinamica de pares chave/valor

const produto = new Object
//essa é uma forma de criar um objeto, usando a palaravra new para chamar uma funcao, função construtora
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    propietario: {
        nome: 'Raul',
        idade: 55,
        endereco: {
            rua: 'Paineitinho',
            numero: 574
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },
    {
        nome: 'Jorimba',
        idade: 20
    }],
    calculaValorSegura: function() {
        //....
    }
}

console.log(carro)

console.log(carro['propietario']['endereco']['numero'])  //pode acesar assim. bom qnd é string a variavel