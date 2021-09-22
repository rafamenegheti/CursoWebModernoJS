const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Maria', nota: 8.7, bolsista: true }
]


//todos os alunos sao bolsistas?
const bolsista = alunos.map(i => i.bolsista).reduce(function(acumulador, atual){
return acumulador && atual
})


console.log(bolsista)


//algum aluno é bolsista


const funcao = function(acumulador, atual){
    return acumulador || atual
}

const bolsista2 = alunos.map(i => i.bolsista).reduce(funcao)

console.log(bolsista2)

