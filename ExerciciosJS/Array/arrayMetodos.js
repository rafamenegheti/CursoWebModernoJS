const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']  //apesar de ser uma constante posso mudar o vetor, so n posso atribuir outra coisa 'pilotos
pilotos.pop() // massa quebrou o carro! 
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()  //tira da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton')  //adciona na primeira posição
console.log(pilotos)

//splice pode adcionar, remover ou fazer os dois ao mesmo tempo, tem no arquivo 'array'




const algunsPilotos1 = pilotos.slice(2)   //slice gera um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 3)
console.log(algunsPilotos2)

