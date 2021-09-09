const escola = 'Cod3r'

console.log(escola.charAt(4))  //Retorna a letra na 4 posição
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3))  //Retorna valor na tabela ASC unicode sla n entendi direito que valor é esse 
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) //Printara somente a partir do indice 1 
console.log(escola.substring(0,3))  //Printa do indice 0 ate o 3

console.log('Escola ' .concat(escola).concat("!"))  //Concatenar

console.log(escola.replace(3, 'e')) //substituir o indice 3 pelo 'e'
console.log(escola.replace(/\d/, 'e'))  //Subistitui todos os numeros pelo 'e', isso que significa o /\d/, isso parece ser reges. pesquisar sobre

console.log('Ana,Maria,Pedro'.split(','))  //Gera um Array separando pela virgula
console.log('Ana,Maria,Pedro'.split(/,/))  //Tb da pra fazer com regex, fica mais bonito hehe

