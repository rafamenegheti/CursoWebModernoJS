let isAtivo = false

console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)  //Pesquisar mais sobre esse "!" sinal logico


//Tudo isso resolve para valores verdadeiros
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))



//Tudo isso resolve para valores falsos
console.log('os falsos...')
console.log(!!0)
console.log('') //String vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('Pra finalizar')
console.log(!!(''|| null || 0 || ' ')) //Vai dar true pois para dar falso todos devem ser falsos

let nome = ''
console.log(nome || 'Desconhecido')  // Imprime a primeira variavel nao nula
