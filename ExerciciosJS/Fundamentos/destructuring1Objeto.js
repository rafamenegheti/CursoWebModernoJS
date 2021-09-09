// Novo recurso do ES   

const pessoa = {
    nome: 'Ana', 
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
//Tira do objeto 'pessoa' o nome e a idade
console.log(nome, idade)

const { nome: n, idade : i} = pessoa
console.log(n, i)

console.log(pessoa)

const { sobrenome, bemHumorada = true} = pessoa  //Definindo valor padrao
console.log(sobrenome, bemHumorada)


const { endereco: {logradouro, numero, cep}} = pessoa  //Nao vaic criar o 'endereco'
console.log(logradouro, numero, cep)


