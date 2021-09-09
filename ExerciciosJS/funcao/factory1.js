// Factory simples,  a funçãoFactory é uma função que retorna um objeto

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

const pessoa1 = new criarPessoa

console.log(pessoa1)


function novoProduto(nome, preco) {
    return {
    nome,
    preco,   // nao precisa fazer preco: preco, so assim do jeito que fiz da certo
    desconto : 0.1
    }
}

const prod1 = new novoProduto('Traque', 1.50)

console.log(prod1)

const prod2 = new novoProduto('Estralin', 1.25)
console.log(prod2)

console.log(prod1.nome)

console.log(novoProduto('Peidin de vei', 1))