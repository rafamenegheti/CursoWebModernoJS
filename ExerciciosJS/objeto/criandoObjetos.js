// usando notação literal

const obj1 = {}

// Object em JS
console.log(typeof Object) //é uma function
console.log(typeof new Object) // é um objeto criado a aprtir de uma função construtora
const obj2 = new Object

// A partir de uma função construtura que voce mesmo cria
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}


const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999, 24, 0.25)

console.log(p1.getPrecoComDesconto())
console.log(p1)

//funcao factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}


const f1 = new criarFuncionario('Junior', 1000, 2)
console.log(f1)
console.log(f1.getSalario())



// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// Uma função famosa que retorna um Objeto, transforma um json em um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)