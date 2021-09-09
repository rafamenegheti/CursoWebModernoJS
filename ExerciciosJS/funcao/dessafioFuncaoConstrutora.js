class pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}


const p1 = new pessoa('Rafael')
p1.falar()



//função construtora
function Pessoa(nome){
    
    this.nome = nome

    this.mostrarNome = function() {
        console.log(`meu nome é ${this.nome}`)
    }

}

const p5 = new Pessoa('Junin')
p5.mostrarNome()
console.log(p5.nome)

console.log(p5) 