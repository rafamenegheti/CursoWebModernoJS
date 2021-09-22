console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')   //forma nao tao boa de criar array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']   //forma recomendada de criar array
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Abia')


aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados[8] === undefined)

console.log('----------------------------------------------------------------------')

aprovados.sort()  //organiza o array
console.log(aprovados)

delete aprovados[1]


console.log('----------------------------------------------------------------------')

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')  //primeiro é o indice base, segundo é quantos elementos vao ser incluidos e depois disso é quais elementos srão adcionados
console.log(aprovados)

 




