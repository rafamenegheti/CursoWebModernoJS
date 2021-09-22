// foreach recebe como primeiro parametro o valor, como segundo o indice e como terceiro o array

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((nome, indice, array) => {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    
})

console.log('-----------------------------------------------------------')

let contador = 0 
aprovados.forEach(function() {

    console.log(`${contador}) ${aprovados[contador]}`)
    contador++
})


console.log('------------------------------------------------------------')


const exibirAprovados = function(aprovado, indice){
    console.log(`${indice + 1}) ${aprovado}`)
}

aprovados.forEach(exibirAprovados)



