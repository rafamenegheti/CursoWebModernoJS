// Object.preventExtensions         imposibilita de colocar mais atributos no objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensivel: ', Object.isExtensible(produto))  //testa se o objeto foi criado com privateExtension

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'  //essa linha n vai surtir efeito
delete produto.tag
console.log(produto)


// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)  //nao consegue mais adcinioar novos atributos, deletar atributos porem consegue modificar os atributos
console.log('Selado: ', Object.isSealed(pessoa))  //retorna se ta selado ou nao


pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


//Object.freeze = selado, mas n consegue alterar o valor dos atributos
