
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

console.log(p1)

console.log(p1.nome)





//factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}


const p2 = criarPessoa('Joao')

p2.falar()

console.log(p2)

console.log(p2.nome)  //n posso fazer isso nesse caso. da undefined