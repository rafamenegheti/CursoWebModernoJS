// pessoa aponta para o endereço de memoria 123 (abstração), e dentro desse endereço eu tenho esse objeto
const pessoa = {nome: 'Joao'}
pessoa.endereco = 'rua boa'
// Não mudei o endereço de memoria do objeto pessoa, somente mudei o conteudo
pessoa.nome = 'Pedro'
console.log(pessoa)

//Agr pessoa esta recebendo um novo objeto, que esta em um endereço de memoria diferente
//pessoa = { nome: 'Ana' }
//Isso vai dar erro pois 'pessoa' é uma constante, logo nao pode receber um objeto que esta em outro endereço

Object.freeze(pessoa)  //Essa função congela o objeto, ou seja, nao se pode mais alterar nada nele

pessoa.nome = 'Maria'
pessoa.idade = 17
console.log(pessoa)  //continua Pedro e nao adciona a idade

const pessoaConstante = Object.freeze({ nome: 'joao'})   //criando um objeto ja freezado