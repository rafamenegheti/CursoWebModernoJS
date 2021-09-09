const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Extraindo de dentro de um arrar somente os valores menores do que 7
//Sem calback
let notasBaixas = []
for(let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)


// Com callBack

//const notasBaixas2 = notas.filter((function(nome){ return nome < 7}))
const notasBaixas2 = notas.filter(nome => nome < 7)

console.log(notasBaixas2)
 
//essa função filter, cria um novo array, ela filtra e colcoa no array somente onde o resultador foi verdadeiro
//Ela basicamente fala, toda vez que passar de um indice do vetor, execute a função, e caso a função for
//verdadeira, passe o valor em questao para o novo, caso for falsa, nao passe 