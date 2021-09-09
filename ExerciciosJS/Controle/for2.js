const notas = [6.7, 7.4, 9.8, 8.1, 7.7]


//percorre o array mais inteligentemente, porem ainda nao é a melhor forma, nao costuma ser usado
for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silvia',
    idade: 29,
    peso: 64
}


//para objeto é ate interessante utilizar essa forma 

for (atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

//Quando voce vai passar uma variavel para chamar o objeto, precisa estar entre []
//Nesse caso, o valor que ficou atribuido a variavel foi peso, pois era o ultimo atirbuto do objeto percorrido
//Por isso o certo seria usar let 

console.log(pessoa[atributo])
console.log(pessoa.peso)

