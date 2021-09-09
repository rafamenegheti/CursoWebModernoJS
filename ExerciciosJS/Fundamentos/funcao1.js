//Funcao sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) //Possa passar somente um valor, mas o segundo sera undefined
imprimirSoma(2, 4, 2, 5, 6, 7) //Vai soamr os 2 primeiros e ignorar o resto
imprimirSoma()

console.log(imprimirSoma(3,5))

console.log('========================')

//Funcao com retorno

function soma(a, b = 0){  //Se eua tribui o valor na criação da função, esse será o valor padrão
    return a + b
}

console.log(soma(32,3))
console.log(soma(32)) //Posso definir so um valor pois os segundo com valor padrão
console.log(soma()) 
soma(4,3)  //Caso eu nao coloque no console.log ela nao sera imprimida